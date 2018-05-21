<template>
  <div>
    <div v-if="page.slideshow.length > 0">
      <hero :hero="page.slideshow[0]"></hero>
    </div>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.text"></div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Hero from '@/components/Hero.vue'

import { butter } from '@/buttercms'

export default {
  name: 'ProjectPage',
  components: {
    'hero': Hero
  },
  data () {
    return {
      page: {
        text: '',
        slideshow: []
      },
      slug: 'teaching'
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
