<template>
  <img v-if="loaded" :src="logo" alt="Schmitz Lab Logo" width="112" height="28">
  <div v-else class="loader-container element is-loading"></div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Logo',
  data () {
    return {
      logo: '',
      loaded: false
    }
  },
  methods: {
    getLogo () {
      butter.content.retrieve(['logo'])
        .then((res) => {
          this.logo = res.data.data.logo
          this.loaded = true
        })
    }
  },
  created () {
    this.getLogo()
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'
div.loader-container
  width: 112px
  height: 28px

.element.is-loading
  &:after
    top: calc(15%)
</style>
