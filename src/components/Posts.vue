<template>
  <div>
    <!-- v-for here -->
    <div v-for="i in 5" v-bind:key="i">
      <post></post>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'Posts',
  components: {
    'post': Post
  }
}
</script>
