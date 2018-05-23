<template>
  <div class="card">
    <header class="card-header-fix-center has-text-centered">
      <p class="card-header-title-fix">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'BlogAbout',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    getRegion () {
      butter.content.retrieve(['title', 'description'])
        .then((res) => {
          console.log(res)
          this.title = res.data.data.title
          this.description = res.data.data.description
        })
    }
  },
  created () {
    console.log('hello???')
    this.getRegion()
  }
}
</script>

<style lang="sass" scoped>
.card-header-fix-center
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1)

.card-header-title-fix
  flex-grow: 1
  font-weight: 700
  padding: 0.75rem

.card-header-fix-center
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1)

.card-header-title-fix
  flex-grow: 1
  font-weight: 700
  padding: 0.75rem

.content
  font-size: 1rem
</style>
