<template>
  <div>
    <div class="box">
      <div class="has-text-centered">
        <div class="post-header">
          <img src="http://placehold.it/900x600">
          <h4 class="title is-4 is-spaced">Some Post</h4>
          <h5 class="subtitle is-5"><i>Some Post Subtitle</i></h5>
          <hr/>
        </div>
      </div>
      <div class="content-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar laoreet. Quisque consequat justo velit, at aliquam ex aliquet eu. Nulla facilisi. Vivamus ac nibh congue, faucibus purus sit amet, malesuada est. Mauris fringilla vulputate libero, et interdum purus sollicitudin vel.</p>
      </div>
      <div class="end-post-details">
        <div class="is-pulled-left">
          <i>November 28, 2017 by <a>Author</a></i>
        </div>
        <div class="is-pulled-right">
          <a>#blog</a> <a>#me</a> <a>#fun</a>
        </div>
      </div>
      <hr/>
      <div class="author-content">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <strong>Author</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </article>
      </div>
      <hr/>
      <div class="end-content-nav-wrapper">
        <div class="is-pulled-left">
          <a href="#">
            <i class="fa fa-angle-double-left" aria-hidden="true"> Back to Home</i>
          </a>
        </div>
      </div>
    </div>
    <!-- post should end here -->
  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'BlogPost',
  components: {
    'post': Post
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

