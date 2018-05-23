<template>
  <!-- sidebar with plugins/details/etc -->
  <div class="column is-4 is-narrow">
    <div class="card-wrapper">
      <blog-about></blog-about>
    </div>
    <div class="card-wrapper">
      <categories></categories>
    </div>
    <div class="card-wrapper twitter">
      <a class="twitter-timeline" href="https://twitter.com/ecomorph?ref_src=twsrc%5Etfw">Tweets by ecomorph</a>
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
