<template>
  <div>
    <navigation></navigation>
    <hero></hero>
    <section class="container">
      <router-view/>
    </section>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import Hero from './../components/Hero.vue'
import Nav from './../components/navigation/Nav.vue'
import Footer from './../components/navigation/Footer.vue'

export default {
  name: 'Index',
  components: {
    'hero': Hero,
    'navigation': Nav,
    'footer-nav': Footer
  }
}
</script>

<style lang="sass">
</style>