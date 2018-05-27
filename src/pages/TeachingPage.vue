<template>
  <div>
    <hero :hero="page.featured_image"></hero>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.content"></div>
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
        title: '',
        content: '',
        featured_image: []
      },
      slug: 'teaching'
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
