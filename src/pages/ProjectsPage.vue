<template>
  <div>
    <hero :hero="page.featured_image"></hero>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.content"></div>
          <div class="has-text-centered">
            <h1 class="title">Projects</h1>
            <hr>
          </div>
          <projects></projects>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'

import { butter } from '@/buttercms'

export default {
  name: 'ProjectPage',
  components: {
    'projects': Projects,
    'hero': Hero
  },
  data () {
    return {
      page: {
        title: '',
        content: '',
        featured_image: []
      },
      slug: 'projects'
    }
  },
  methods: {
    getPage () {
      butter.page.retrieve('primary_page', this.slug)
        .then((res) => {
          this.page = res.data.data.fields
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getPage()
    })
  }
}
</script>
