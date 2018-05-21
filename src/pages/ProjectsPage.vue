<template>
  <div>
    <hero :hero="page.slideshow[0]"></hero>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.text"></div>
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
        type: Object
      },
      slug: 'projects'
    }
  },
  methods: {
    getPage() {
      butter.page.retrieve('main', this.slug)
        .then((res) => {
          console.log(res)
          this.page = res.data.data.fields
        })
    },
  },
  created () {
    this.getPage()
  }
}
</script>
