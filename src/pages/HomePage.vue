<template>
  <div>
    <div v-if="page.slideshow.length > 0">
      <slideshow :slides="page.slideshow"></slideshow>
    </div>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.text"></div>
          <section class="widget">
            <h1 class="title">Announcements</h1>
            <announcements></announcements>
          </section>
          <section class="widget">
            <h1 class="title">Latest Publications</h1>
            <publications></publications>
          </section>
          <section class="widget">
            <h1 class="title">Projects</h1>
            <projects></projects>
          </section>
          <section class="widget">
            <h1 class="title">People</h1>
            <cards category="team"></cards>
          </section>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Slideshow from '@/components/Slideshow.vue'
import Cards from '@/components/Cards.vue'
import Publications from '@/components/Publications.vue'
import Projects from '@/components/Projects.vue'
import Announcements from '@/components/Announcements.vue'

import { butter } from '@/buttercms'

export default {
  name: 'HomePage',
  components: {
    'slideshow': Slideshow,
    'cards': Cards,
    'publications': Publications,
    'announcements': Announcements,
    'projects': Projects
  },
  data () {
    return {
      page: {
        text: '',
        slideshow: []
      },
      slug: 'home'
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

<style lang="sass" scoped>
@import '@/mq.sass'

[v-cloak]
  display: none

.widget
  margin-bottom: 2rem

.container
  margin-top: 2em
  margin-bottom: 2em
</style>
