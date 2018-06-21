<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade">
      <router-view/>
    </transition>
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
#footer
 position: absolute
 width: 100%

.fade-enter-active, .fade-leave-active
  height: 1000px
  transition: opacity 0.25s ease-out

.fade-enter, .fade-leave-to
  opacity: 0

#app
  min-height: 1000px

.content
  div
    margin-top: 2rem
    margin-bottom: 2rem
  img
    max-height: 750px
    width: auto

iframe
  max-width: 100%
</style>
