<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <router-link :to="`/projects/${project.slug}`" tag="div" v-for="(project, i) in projects" v-bind:key="i" class="card large">
      <div class="card-image">
        <img class="image" :src="project.featured_image">
      </div>
      <div :class="`card-content-container ${hideTitles()}`">
        <div class="card-content">
          <h1 class="title">{{ project.name }}</h1>
        </div>
      </div>
    </router-link>
  </masonry>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Projects',
  props: {
    limitProjects: Boolean,
    showTitles: Boolean
  },
  data () {
    return {
      projects: {
        type: Array
      }
    }
  },
  methods: {
    getCollection () {
      butter.content.retrieve(['projects', 'projects_limit'])
        .then((res) => {
          if (this.limitProjects) {
            this.limit = res.data.data.projects_limit
            this.projects = res.data.data.projects.slice(0, this.limit)
          } else {
            this.projects = res.data.data.projects
          }
        })
    },
    hideTitles () {
      // returns the css class hide if the prop is false
      return this.showTitles ? '' : 'hide'
    }
  },
  created () {
    this.getCollection()
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'
.card
  transiton: all 1s
  width: 100%
  cursor: pointer
  &:hover
    box-shadow: 0 0 15px rgba(33,33,33,.2)
    .card-content-container.hide
      max-height: 500px

.card-content-container.hide
  max-height: 0
  transition: max-height 0.25s
  overflow: hidden

.card.large
  -webkit-backface-visibility: hidden
  backface-visibility: initial
  border-radius: 5px
  margin-bottom: 20px

.project
  cursor: pointer

.title
  font-size: 1.5rem
</style>
