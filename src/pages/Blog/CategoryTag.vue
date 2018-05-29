<template>
  <div>
    <h1 class="title" v-if="$route.params.category">{{ $route.params.category | capitalize }}</h1>
    <h1 class="title" v-else-if="$route.params.tag">{{ $route.params.tag | capitalize }}</h1>
    <posts v-if="loaded" :posts="posts"></posts>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

import { butter } from '@/buttercms'

export default {
  name: 'CategoryTag',
  components: {
    'posts': Posts
  },
  data () {
    return {
      loaded: false,
      posts: [],
      page: 1,
      meta: {}
    }
  },
  methods: {
    getCategory (category) {
      butter.category.retrieve(category, {
        include: 'recent_posts'
      }).then((res) => {
        this.posts = res.data.data.recent_posts
        this.loaded = true
      })
    }
  },
  created () {
    if (this.$route.path.includes('/blog/category')) {
      this.getCategory(this.$route.params.category)
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.path.includes('/blog/category')) {
      this.getCategory(to.params.category)
    }
    next()
  }
}
</script>

<style lang="sass" scoped>
.pagination a
  padding: 6.5px 10px
</style>
