<template>
  <masonry :cols="{default: 3, 850: 2, 600: 1}" :gutter="30">
    <div class="card large" v-for="n in 6" v-bind:key="n">
      <div class="card-image">
        <figure class="image">
          <img src="https://source.unsplash.com/pe_R74hldW4" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 no-padding">The Conceptionist</p>
            <p><span class="title is-6"><a href="http://twitter.com/#">@twitterid</a></span></p>
            <p class="subtitle is-6">Developer</p>
          </div>
        </div>
        <div class="content">
          {{ ipsum[n % 3] }}
          <div class="background-icon"><span class="icon-barcode"></span></div>
        </div>
      </div>
    </div>
  </masonry>
</template>

<script>
export default {
  name: 'Cards',
  data () {
    return {
      ipsum: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Moooo hi this is a testDolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Moooo hi this is a testDolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Moooo hi this is a testDolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Moooo hi this is a testDolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!'
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.card.large
  // height: 600px
  -webkit-backface-visibility: hidden
  backface-visibility: initial
  border-radius: 5px
  margin-bottom: 20px

.media-content
  overflow: hidden

.title.no-padding
  margin-bottom: 0 !important
</style>
