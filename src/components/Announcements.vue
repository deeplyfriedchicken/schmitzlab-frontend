<template>
  <div>
    <div class="notification" v-for="(announcement, i) in announcements" v-bind:key="i">
      <h3 class="title is-4">{{ announcement.title }}</h3>
      <div class="content" v-html="announcement.content"></div>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Announcements',
  props: {
    limitAnnouncements: Boolean
  },
  data () {
    return {
      announcements: {
        type: Array
      }
    }
  },
  methods: {
    getCollection () {
      butter.content.retrieve(['announcements', 'announcements_limit'])
        .then((res) => {
          if (this.limitAnnouncements) {
            this.limit = res.data.data.projects_limit
            this.announcements = res.data.data.announcements.slice(0, this.limit)
          } else {
            this.announcements = res.data.data.announcements
          }
          this.announcements = this.announcements.filter(a => a.published == true)
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
