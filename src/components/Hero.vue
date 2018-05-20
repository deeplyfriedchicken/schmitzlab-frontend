<template>
      <swiper :options="swiperOption">
        <swiper-slide>
          <section class="hero is-info is-medium is-bold" style="background-image:url('https://images.pexels.com/photos/207171/pexels-photo-207171.jpeg'); background-size:cover; background-repeat:no-repeat; background-position: center center;">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">
                Lars Schmitz the website
                </h1>
                <h2 class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h2>
              </div>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>          
          <section class="hero is-info is-medium is-bold" style="background-image:url('http://via.placeholder.com/1800x1500'); background-size:cover; background-repeat:no-repeat; background-position: center center;">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">
                Ecomorph new findings
                </h1>
                <h2 class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h2>
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
  name: 'Hero',
  components: {
    swiper,
    swiperSlide
  },
  data() {
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
  background-image: none
  background-color: white

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
  color: hsl(192, 17%, 99%) !important
  .subtitle
  color: hsl(192, 17%, 99%) !important
  padding-top: 2rem
  line-height: 1.5
</style>
