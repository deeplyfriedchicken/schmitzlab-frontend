<template>
  <swiper :options="swiperOption" v-if="slides.length > 0">
    <swiper-slide v-for="(slide, index) in slides" v-bind:key="index">
      <section class="hero is-info is-medium is-bold" v-bind:style="{ 'background-image': `url(${slide.image})` }">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
            {{ slide.title }}
            </h1>
            <div>
              <h2 class="subtitle">
              {{ slide.subtitle }}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import './../../node_modules/swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Slideshow',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    slides: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import './../mq'

.hero.is-info.is-bold
  background-color: black
  background-size: cover
  background-repeat:no-repeat
  background-position: center center

.container
  +desktop
    max-width: 800px
    width: 800px
  +tablet-only
    max-width: 600px
    width: 600px
  +mobile
    max-width: 350px
    width: 350px
  +tiny
    max-width: 250px
    max-width: 250px

.hero-body
  .title
    display: inline-block
    padding: 0.25rem
    color: hsl(192, 17%, 99%) !important
    background-color: rgba(0, 0, 0, 0.5)
  .subtitle
    display: inline-block
    color: hsl(192, 17%, 99%) !important
    padding: 0.5rem
    background-color: rgba(0, 0, 0, 0.5)
</style>
