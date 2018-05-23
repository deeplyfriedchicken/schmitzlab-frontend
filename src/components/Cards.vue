<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <div class="card large" v-for="(person, index) in people" v-bind:key="index">
      <div class="card-image">
        <figure class="image">
          <img :src="person.profile_picture | src" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ person.name }}</p>
            <p class="subtitle is-6">{{ person.position }}</p>
            <p class="subtitle is-6">{{ person.college }}</p>
          </div>
        </div>
      </div>
    </div>
  </masonry>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Cards',
  data () {
    return {
      people: []
    }
  },
  methods: {
    getCollection () {
      butter.content.retrieve(['team'])
        .then((res) => {
          this.people = res.data.data.team
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
