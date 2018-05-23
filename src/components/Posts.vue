<template>
  <div>
    <!-- v-for here -->
    <div v-for="(post, i) in posts" v-bind:key="i">
      <post :post="post"></post>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'Posts',
  components: {
    'post': Post
  },
  props: {
    posts: {
      type: Array
    }
  }
}
</script>
