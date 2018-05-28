<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <router-link :to="`/projects/${project.slug}`" tag="div" v-for="(project, i) in projects" v-bind:key="i" class="project">
      <div class="project-container">
        <img class="image" :src="project.featured_image">
        <div class="overlay">
          <p><i class="fa fa-link"></i></p>
          <p>{{ project.name }}</p>
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
    limitProjects: Boolean
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
    }
  },
  created () {
    this.getCollection()
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

p
  -webkit-font-smoothing: antialiased
  font-size: 1.5em
  font-weight: 600
  margin: auto
  transition-delay: 0s
  position: absolute
  left: 50%;
  top: 50%
  transform: translate(-50%, -15%)
  color: white
  z-index: 15
  white-space: nowrap;

p i
  transform: translate(-50%, -100%)

.project-container
  position: relative
  &:hover
    .overlay
      width: 100%
      p
        visibility: visible

.overlay
  position: absolute
  bottom: 0
  left: 0
  right: 0
  background-color: $link
  overflow: hidden
  width: 0
  height: 100%
  opacity: .75
  transition: .5s ease

.project
  cursor: pointer
</style>
