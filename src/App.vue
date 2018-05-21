<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import Nav from '@/components/navigation/Nav.vue'
import Footer from '@/components/navigation/Footer.vue'

export default {
  name: 'App',
  components: {
    'navigation': Nav,
    'footer-nav': Footer
  }
}
</script>

<style lang="sass">
@import 'mq'
@import '../node_modules/bulma/bulma.sass'

.content
  div
    margin-top: 2rem
    margin-bottom: 2rem

.video
  position: relative
  padding-bottom: 56.25%
  padding-top: 25px
  height: 0
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
