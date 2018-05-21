<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="/static/images/schmitzlab.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" v-bind:class="{ 'is-active' : burger }" @click="burger = !burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="" class="navbar-menu" v-bind:class="{ 'is-active' : burger }">
      <div class="navbar-start">
        <router-link class="navbar-item navbar-main" active-class="active" to="/" exact>
          Home
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/research">
          Research
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/publications">
          Publications
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/teaching">
          Teaching
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/code">
          Code
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/people">
          People
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/projects">
          Projects
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/documentation/overview/start/">
            More
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/documentation/overview/start/">
              Overview
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
              Form
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/ecomorph?ref_src=twsrc%5Etfw">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>
                  Follow @ecomorph
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
        burger: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

.navbar-start
  .navbar-main:hover, .navbar-main.active
    color: $link
    border-bottom: 5px solid black

.bd-tw-button
  background-color: #55acee
  color: #fff
  border-color: transparent!important
  &:hover
    background-color: #49a6ed
</style>


