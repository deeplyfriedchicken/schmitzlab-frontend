<template>
  <div class="card">
    <header class="card-header-fix-center has-text-centered">
      <p class="card-header-title-fix">
        Categories
      </p>
    </header>
    <div class="card-content">
      <div class="has-text-centered">
        <router-link v-for="(category, i) in categories" :key="i" :to="`/blog/category/${category.slug}`">
          <span class="tag is-info is-medium">{{ category.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { butter } from '@/buttercms'

export default {
  name: 'Categories',
  data () {
    return {
      categories: []
    }
  },
  methods: {
    getCategories () {
      butter.category.list()
        .then((res) => {
          this.categories = res.data.data
        })
    }
  },
  created () {
    this.getCategories()
  }
}
</script>

<style lang="sass" scoped>
.tag
  margin: 5px

.tag.is-medium
  font-size: 1.25rem
  height: 35px
  background-color: white
  color: #cc181e
  border: 2px solid #cc181e
  border-radius: 0
  &:hover
    background-color: #cc181e
    color: white
    transition: all 0.5s

.card-header-fix-center
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1)

/* centering card-header-title text(2):
 * ensures the header text remains of similar quality

.card-header-title-fix
  flex-grow: 1
  font-weight: 700
  padding: 0.75rem

/* giving corners to the box styling

/* centering card-header-title text(1):
 * ensures bottom shadow remains

.card-header-fix-center
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1)

/* centering card-header-title text(2):
 * ensures the header text remains of similar quality

.card-header-title-fix
  flex-grow: 1
  font-weight: 700
  padding: 0.75rem

/* giving corners to the box styling */
</style>


