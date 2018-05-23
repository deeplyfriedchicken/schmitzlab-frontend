<template>
  <div class="post-wrapper">
    <div class="box">
      <div class="post-header has-text-centered">
        <img src="http://placehold.it/900x600">
        <h4 class="title is-4"><a href="#">{{ post.title }}</a></h4>
      </div>
      <hr/>
      <div class="post-content-short">
        <p>{{ post.summary }}</p>
        <div class="continue-reading has-text-centered">
          <router-link to="/blog/post/hi" class="button is-primary is-outlined">Continue Reading</router-link>
        </div>
        <div class="post-content-details">
          <div class="is-pulled-left">
            <i>November 28, 2017 by <a>Author</a></i>
          </div>
          <div class="is-pulled-right">
            <a>#blog</a> <a>#me</a> <a>#fun</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style lang="sass" scoped>
.post-wrapper
  padding-bottom: 40px

.post-header img, .content-header img
  padding-bottom: 20px

.continue-reading
  padding: 30px

.post-content-details
  padding-bottom: 20px
</style>

