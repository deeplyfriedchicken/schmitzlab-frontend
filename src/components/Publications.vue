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
  data () {
    return {
      publications: []
    }
  },
  methods: {
    getPublications (n) {
      butter.content.retrieve(['publications'])
        .then((res) => {
          this.publications = res.data.data.publications
        })
    }
  },
  created () {
    this.getPublications()
  }
}
</script>
