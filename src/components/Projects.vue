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
  data () {
    return {
      projects: {
        type: Array
      }
    }
  },
  methods: {
    getCollection () {
      butter.content.retrieve(['projects'])
        .then((res) => {
          this.projects = res.data.data.projects
        })
    }
  },
  created () {
    this.getCollection()
  }
}
</script>
