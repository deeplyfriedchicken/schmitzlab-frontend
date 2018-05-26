<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <logo></logo>
      </a>
      <div class="navbar-burger burger" v-bind:class="{ 'is-active' : burger }" @click="burger = !burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="" class="navbar-menu" v-bind:class="{ 'is-active' : burger }">
      <div class="navbar-start" @click="burger = false">
        <router-link class="navbar-item navbar-main" active-class="active" to="/" exact>
          Home
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/people">
          People
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/research">
          Research
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/publications">
          Publications
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/projects">
          Projects
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/teaching">
          Teaching
        </router-link>
        <router-link class="navbar-item navbar-main" active-class="active" to="/blog">
          Blog
        </router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown is-boxed">
            <!-- More Pages Navigation -->
            <router-link v-for="(page, i) in pages" :key="i" class="navbar-item" active-class="active" :to="`/page/${page.slug}`">
              {{ page.fields.title }}
            </router-link>
            <hr class="navbar-divider">
            <!-- Blog Categories -->
            <router-link class="navbar-item" active-class="active" to="/">
              Categories
            </router-link>
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
import Logo from '@/components/Logo.vue'

import { butter } from '@/buttercms'

export default {
  name: 'Nav',
  components: {
    'logo': Logo
  },
  data () {
    return {
      burger: false,
      pages: []
    }
  },
  methods: {
    getPages () {
      butter.page.list('page')
        .then((res) => {
          this.pages = res.data.data
        }).catch((res) => {
          console.log(res)
        })
    }
  },
  created () {
    this.getPages()
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

.navbar-start
  .navbar-main:hover, .navbar-main.active
      color: $link
  +desktop
    .navbar-main:hover, .navbar-main.active
      border-bottom: 5px solid black
    .navbar-item
      font-size: 1rem

.bd-tw-button
  background-color: #55acee
  color: #fff
  border-color: transparent!important
  &:hover
    background-color: #49a6ed
</style>
