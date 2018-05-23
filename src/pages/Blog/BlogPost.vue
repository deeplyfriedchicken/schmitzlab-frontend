<template>
  <div>
    <div class="box">
      <div class="post-header">
        <img :src="post.featured_image">
        <h4 class="title is-4 is-spaced">{{ post.title }}</h4>
        <h5 class="subtitle is-5"><i>{{ post.summary }}</i></h5>
        <hr/>
      </div>
      <div class="content-wrapper" v-html="post.body">
      </div>
      <div class="end-post-details">
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
      <hr/>
      <div class="end-content-nav-wrapper">
        <div class="is-pulled-left">
          <a @click="$router.go(-1)">
            Back
          </a>
        </div>
      </div>
    </div>
    <!-- post should end here -->
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import Tag from '@/components/Tag.vue'

import { butter } from '@/buttercms'

export default {
  name: 'BlogPost',
  components: {
    'post': Post,
    'tag': Tag
  },
  data () {
    return {
      post: {}
    }
  },
  created () {
    butter.post.retrieve(this.$route.params.slug)
      .then((res) => {
        this.post = res.data.data
      }).catch((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="sass">
.content-wrapper p
  padding-bottom: 15px

.end-post-details
  padding-top: 15px
  padding-bottom: 15px

.end-content-nav-wrapper
  padding-bottom: 20px

.post-header img, .content-header img
  padding-bottom: 20px
</style>
