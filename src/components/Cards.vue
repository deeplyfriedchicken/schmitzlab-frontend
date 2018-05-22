<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <div class="card large" v-for="(item, index) in collection" v-bind:key="index">
      <div class="card-image">
        <figure class="image">
          <img :src="item.image.path | src" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ item.first_name }} {{ item.last_name }}</p>
            <p class="subtitle is-6">{{ item.affiliation }}</p>
            <p class="subtitle is-6">{{ item.college }}</p>
          </div>
        </div>
      </div>
    </div>
  </masonry>
</template>

<script>
import { cockpit } from '@/cockpit'

export default {
  name: 'Cards',
  data () {
    return {
      collection: []
    }
  },
  methods: {
    getCollection () {
      cockpit.getCollection('people')
        .then(res => {
          this.collection = res.data.entries
        })
    }
  },
  created () {
    this.getCollection()
  }
}
</script>

<style lang="sass" scoped>
.card
  width: 100%

.card.large
  -webkit-backface-visibility: hidden
  backface-visibility: initial
  border-radius: 5px
  margin-bottom: 20px

.media-content
  overflow: hidden

.title.no-padding
  margin-bottom: 0 !important
</style>
