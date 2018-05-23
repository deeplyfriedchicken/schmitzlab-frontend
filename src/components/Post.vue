<template>
  <div class="post-wrapper">
    <div class="box">
      <router-link :to="`/blog/post/${post.slug}`">
        <div class="post-header">
          <img :src="post.featured_image">
          <h4 class="title is-4">{{ post.title }}</h4>
        </div>
      </router-link>
      <hr/>
      <div class="post-content-short">
        <p>{{ post.summary }}</p>
        <div class="continue-reading has-text-centered">
          <router-link :to="`/blog/post/${post.slug}`" class="button is-primary is-outlined">Read More</router-link>
        </div>
        <div class="post-content-details">
          <div class="columns">
            <div class="column is-6">
              <i>{{ post.published | moment('dddd, MMMM YYYY') }}</i>
            </div>
            <div class="column is-6">
              <div class="has-text-centered is-pulled-right">
                <div v-for="(tag, i) in post.tags" :key="i">
                  <router-link class="blog-tag" :to="`/blog/tag/${tag.slug}`"><tag size="small">{{ tag.name }}</tag></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag.vue'

export default {
  name: 'Post',
  components: {
    'tag': Tag
  },
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

.is-pulled-right
  +mobile
    float: none !important

.tag-margin
  margin-bottom: 5px

.post-wrapper
  padding-bottom: 40px

.post-header img, .content-header img
  padding-bottom: 20px

.continue-reading
  padding: 30px

.post-content-details
  padding-bottom: 20px
</style>
