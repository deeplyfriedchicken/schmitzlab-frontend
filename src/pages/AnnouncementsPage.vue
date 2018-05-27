<template>
  <div>
    <hero :hero="page.featured_image"></hero>
    <section class="section">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="content" v-html="page.content"></div>
        </div>
      </div>
      <div>
        <announcements></announcements>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

import Announcements from '@/components/Announcements.vue'

import { butter } from '@/buttercms'

export default {
  name: 'AnnouncementsPage',
  components: {
    'hero': Hero,
    'announcements': Announcements
  },
  data () {
    return {
      page: {
        title: '',
        content: '',
        featured_image: [],
        announcements: []
      },
      slug: 'announcements'
    }
  },
  methods: {
    getPage () {
      butter.page.retrieve('primary_page', this.slug)
        .then((res) => {
          this.page = res.data.data.fields
        })
    }
  },
  created () {
    this.getPage()
  }
}
</script>
