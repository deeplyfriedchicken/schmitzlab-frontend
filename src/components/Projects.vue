<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <div v-for="(project, i) in projects" v-bind:key="i">
      <img :src="project.cover_photo">
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
          console.log(res.data.data)
          this.projects = res.data.data.projects
        })
    }
  },
  created () {
    this.getCollection()
  }
}
</script>
