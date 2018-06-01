<template>
  <masonry :cols="{default: 3, 1000: 2, 600: 1}" :gutter="30">
    <router-link :to="`/people/${person.slug}`" tag="div" class="card large" v-for="(person, index) in people" v-bind:key="index">
      <div class="card-image">
        <figure class="image">
          <img :src="person.image | src" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title">{{ person.first_name }} {{ person.last_name }}</p>
            <p class="subtitle">{{ person.college }}</p>
            <p class="subtitle">{{ person.affiliation }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </masonry>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'People',
  props: {
    limitPeople: Boolean
  },
  data () {
    return {
      people: [],
      limit: null
    }
  },
  methods: {
    getCollection () {
      butter.content.retrieve(['people', 'people_limit'])
        .then((res) => {
          if (this.limitPeople) {
            this.limit = res.data.data.people_limit
            this.people = res.data.data.people.slice(0, this.limit)
          } else {
            this.people = res.data.data.people
          }
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
  transiton: all 1s
  width: 100%
  cursor: pointer
  &:hover
    box-shadow: 0 0 15px rgba(33,33,33,.2)

.card.large
  -webkit-backface-visibility: hidden
  backface-visibility: initial
  border-radius: 5px
  margin-bottom: 20px

.media-content
  overflow: hidden

.title.no-padding
  margin-bottom: 0 !important

.media-content
  .subtitle
    margin-bottom: 2px
</style>
