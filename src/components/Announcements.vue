<template>
  <div>
    <div class="notification" v-for="(announcement, i) in announcements" v-bind:key="i">
      <h3 class="title is-4">{{ announcement.title }}</h3>
      <div class="content" v-html="announcement.text"></div>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Announcements',
  data () {
    return {
      announcements: {
        type: Array
      }
    }
  },
  methods: {
    getCollection () {
      butter.content.retrieve(['announcements'])
        .then((res) => {
          this.announcements = res.data.data.announcements
        })
    }
  },
  created () {
    this.getCollection()
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'

.content
  /deep/ a
    border-bottom: none
    &:hover
      border-bottom: none
      color: $link
</style>
