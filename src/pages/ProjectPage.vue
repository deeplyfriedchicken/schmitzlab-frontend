<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="image">
          <img :src="project.featured_image"/>
        </div>
        <div class="content" v-html="project.description"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { buttered } from '@/axios'

export default {
  name: 'ProjectPage',
  data () {
    return {
      project: {
        title: '',
        slug: '',
        featured_image: '',
        description: null
      },
      loaded: false
    }
  },
  methods: {
    getProject (slug) {
      buttered.getFilteredCollection('projects', 'slug', slug)
        .then(res => {
          this.project = res.data.data.projects[0]
        })
    }
  },
  created () {
    this.getProject(this.$route.params.slug)
  }
}
</script>

<style lang="sass" scoped>

</style>


