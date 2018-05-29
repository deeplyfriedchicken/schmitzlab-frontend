<template>
  <!-- sidebar with plugins/details/etc -->
  <div class="column is-4 is-narrow">
    <div class="card-wrapper">
      <blog-about></blog-about>
    </div>
    <div class="card-wrapper">
      <categories></categories>
    </div>
    <div class="card-wrapper twitter" ref="timeline">
      <a class="twitter-timeline" href="https://twitter.com/ecomorph?ref_src=twsrc%5Etfw"><span class="element is-loading"></span></a>
    </div>
    <!-- end of plugins/etc/ column -->
  </div>

</template>

<script>
import BlogAbout from './Sidebar/BlogAbout.vue'
import Categories from './Sidebar/Categories.vue'

export default {
  name: 'Sidebar',
  components: {
    'blog-about': BlogAbout,
    'categories': Categories
  },
  mounted () {
    /* eslint-disable */
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {}
      if (d.getElementById(id)) return t.widgets.load()
      js = d.createElement(s)
      js.id = id
      js.src = "https://platform.twitter.com/widgets.js"
      fjs.parentNode.insertBefore(js, fjs)

      t._e = []
      t.ready = function (f) {
        t._e.push(f)
      };
      return t
    }(document, "script", "twitter-wjs"))
    /* eslint-enable */
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'
.card-wrapper
  padding-bottom: 20px

.twitter
  +tablet
    max-width: 300px
</style>
