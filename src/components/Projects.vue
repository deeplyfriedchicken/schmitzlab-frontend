<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <div v-for="(project, i) in projects" v-bind:key="i">
      <img :src="project.featured_image">
    </div>
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
