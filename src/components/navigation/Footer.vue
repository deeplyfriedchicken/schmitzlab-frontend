<template>
  <div id="footer">
    <footer class="footer">
      <div class="container">
        <div class="section">
          <div class="columns">
            <div cass="column is-3">

            </div>
          </div>
          <div class="columns">
              <div class="column is-3">
                <p class="bd-footer-link-title">
                  <router-link to="/">Home</router-link>
                </p>
                <p class="bd-footer-link-title">
                  Blog
                </p>
                <p class="bd-footer-link" v-for="(post, i) in posts" :key="i">
                  <router-link :to="`/blog/post/${post.slug}`">
                    {{ post.title }}
                  </router-link>
                </p>
                <p class="bd-footer-link bd-is-more">
                  <router-link to="/blog">
                    View all posts
                  </router-link>
                </p>
              </div>
              <div class="column is-3">
                <p class="bd-footer-link-title">Projects</p>
                <p v-for="(project, i) in projects" :key="i" class="bd-footer-link"><router-link :to="`/projects/${project.slug}`">{{ project.name }}</router-link></p>
                <p class="bd-footer-link bd-is-more">
                  <router-link to="/projects">
                    View all projects
                  </router-link>
                </p>
              </div>
              <div class="column is-6">
                <p class="bd-footer-link-title">More</p>
                <p v-for="(link, i) in footer_links" :key="i" class="bd-footer-link bd-has-subtitle">
                  <a :href="link.link">
                    <strong>
                      {{ link.name }}
                    </strong>
                    <em>
                      {{ link.description }}
                    </em>
                  </a>
                </p>
              </div>
            </div>
        </div>
      </div>
    </footer>
    <div class="copyright has-text-centered">
      <div class="attribution" >
        <a href="https://vuejs.org" target="_blank"><img src="https://vuejs.org/images/logo.png"></a>
        <a href="https://buttercms.com/" target="_blank"><img src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"></a>
      </div>
      <span class="has-text-grey is-size-7">© Schmitz Lab 2018 | Designed by <a _target="blank" href="http://kcunanan.com">Kevin Cunanan</a></span>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Footer',
  data () {
    return {
      posts: [],
      projects: [],
      footer_links: [],
      loaded: false
    }
  },
  methods: {
    getPosts () {
      butter.post.list({page: 1, page_size: 4})
        .then((res) => {
          this.posts = res.data.data
        })
    },
    getContent () {
      butter.content.retrieve(['projects', 'footer_links'])
        .then((res) => {
          this.projects = res.data.data.projects.slice(0, 3)
          this.footer_links = res.data.data.footer_links
          this.loaded = true
        })
    }
  },
  created () {
    this.getPosts()
    this.getContent()
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

.copyright
  background-color: #2B4251
  padding: 1.5rem

.section
  background-color: #fafafa

.attribution
  img
    height: 50px

.footer a:not(.icon), .footer a:visited:not(.icon)
  border-bottom: none
  &:hover
    border-bottom: none
    color: $link

.footer
  background-color: #fafafa
  padding: 0.5rem
  a
    border-bottom: none
    color: #4a4a4a
    &:hover
      border-bottom: none
      color: $link
  .bd-footer-link-title:not(:first-child)
    margin-top: 1.5em
  .bd-footer-link-title
    color: #363636
    font-size: 1.25rem
    font-weight: 600
  .bd-footer-link
    margin-top: .5rem
  .bd-is-more
    font-size: .875rem
    a
      color: #b5b5b5
      &:hover
        color: $link
  .bd-footer-link.bd-has-subtitle
    a
      align-items: center
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      margin-top: 1rem
      &:hover
        strong, em
          color: $link
      strong
        color: #363636
        flex-grow: 1
        flex-shrink: 1
        font-weight: unset
      em
        display: block
        font-size: .875rem
        font-style: normal
        color: #b5b5b5
        +mobile
          width: 100%
        +tablet
          margin-left: 0
          text-align: right
</style>
