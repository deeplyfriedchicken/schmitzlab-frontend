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
  name: 'Page',
  components: {
    'hero': Hero
  },
  data () {
    return {
      page: {
        title: '',
        content: '',
        featured_image: []
      }
    }
  },
  methods: {
    getPage (slug) {
      butter.page.retrieve('page', slug)
        .then((res) => {
          this.page = res.data.data.fields
        })
    }
  },
  created () {
    this.getPage(this.$route.params.slug)
  }
}
</script>
