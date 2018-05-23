<template>
  <img :src="logo" alt="Schmitz Lab Logo" width="112" height="28">
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Logo',
  data () {
    return {
      logo: ''
    }
  },
  methods: {
    getLogo () {
      butter.content.retrieve(['logo'])
        .then((res) => {
          this.logo = res.data.data.logo
        })
    }
  },
  created () {
    this.getLogo()
  }
}
</script>
