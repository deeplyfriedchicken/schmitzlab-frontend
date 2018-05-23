<template>
  <div v-if="hero.length > 0">
    <section
      class="hero is-info is-medium is-bold"
      :style="{ 'background-image': `url(${hero[0].image})` }">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ hero[0].title }}
          </h1>
          <div>
            <h2 class="subtitle">
              {{ hero[0].subtitle }}
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    hero: {
      type: Array
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

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
