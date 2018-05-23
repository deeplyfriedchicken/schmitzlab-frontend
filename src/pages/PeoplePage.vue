<template>
  <div>
    <hero :hero="page.featured_image"></hero>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.content"></div>
          <div class="has-text-centered">
            <h1 class="title">People</h1>
            <hr>
            <cards category="team"></cards>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Hero from '@/components/Hero.vue'
import Cards from '@/components/Cards.vue'

import { butter } from '@/buttercms'

export default {
  name: 'PeoplePage',
  components: {
    'hero': Hero,
    'cards': Cards
  },
  data () {
    return {
      page: {
        title: '',
        content: '',
        featured_image: []
      },
      slug: 'people'
    }
  },
  methods: {
    getPage () {
      butter.page.retrieve('primary_page', this.slug)
        .then((res) => {
          console.log(res)
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

<style lang="sass" scoped>
@import '@/mq.sass'
</style>
