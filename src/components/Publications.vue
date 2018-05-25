<template>
  <div class="content">
    <div v-for="(p, i) in publications" v-bind:key="i">
      <div v-html="p.text"></div>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'publications',
  props: {
    limitPublications: Boolean
  },
  data () {
    return {
      publications: [],
      limit: null
    }
  },
  methods: {
    getPublications () {
      butter.content.retrieve(['publications', 'publications_limit'])
        .then((res) => {
          if (this.limitPublications) {
            this.limit = res.data.data.publications_limit
            this.publications = res.data.data.publications.slice(0, this.limit)
          } else {
            this.publications = res.data.data.publications
          }
        })
    }
  },
  created () {
    this.getPublications()
  }
}
</script>
