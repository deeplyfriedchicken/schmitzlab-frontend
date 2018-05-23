<template>
  <div>
    <posts v-if="loaded" :posts="posts"></posts>
    <div class="loader" v-else></div>
    <!-- pagination under posts -->
    <div class="section">
      <nav class="pagination is-medium is-centered">
        <a class="pagination-previous" :disabled="!meta.previous_page" :to="meta.previous_page">Previous</a>
        <a class="pagination-next" :disabled="!meta.next_page" :to="meta.next_page">Next</a>
        <ul class="pagination-list">
          <li><a class="pagination-link" v-if="meta.next_page" :to="meta.previous_page">{{ page - 1 }}</a></li>
          <li><a class="pagination-link is-current">{{ page }}</a></li>
          <li><a class="pagination-link" v-if="meta.next_page" :to="meta.next_page">{{ page + 1 }}</a></li>
        </ul>
      </nav>
    </div>
    <!-- end of pagination -->
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

import { butter } from '@/buttercms'

export default {
  name: 'BlogList',
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
    getFeed () {
      butter.post.list({
        page: 1,
        page_size: 5
      }).then((res) => {
        this.posts = res.data.data
        this.page = res.config.params.page
        this.meta = res.data.meta
        this.loaded = true
      })
    }
  },
  created () {
    this.getFeed()
  }
}
</script>
