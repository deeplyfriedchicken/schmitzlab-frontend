<template>
  <div>
    <div v-if="page.slideshow.length > 0">
      <hero :hero="page.slideshow[0]"></hero>
    </div>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.text"></div>
          <div class="has-text-centered">
            <h1 class="title">Publications</h1>
            <hr>
          </div>
          <publications></publications>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Hero from '@/components/Hero.vue'
import Publications from '@/components/Publications.vue'

import { butter } from '@/buttercms'

export default {
  name: 'PublicationsPage',
  components: {
    'publications': Publications,
    'hero': Hero
  },
  data () {
    return {
      page: {
        text: '',
        slideshow: []
      },
      slug: 'publications'
    }
  },
  methods: {
    getPage () {
      butter.page.retrieve('main', this.slug)
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
