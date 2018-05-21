<template>
  <div class="container">
    <div class="section">
        <!-- Developers -->
        <h1 class="title">Current People In The Lab</h1>
        <cards></cards>
        <h1 class="title">Alumni</h1>
        <cards></cards>
        <h1 class="title">Collaborators</h1>
        <cards></cards>
    </div>
  </div>
</template>

<script>
import Cards from './Cards.vue'

export default {
  name: 'Team',
  components: {
    'cards': Cards
  }
}
</script>

<style lang="sass" scoped>
body
  background: #041221

strong
  color: lemonchiffon

.fa
  color: lemonchiffon
  margin: 10px
</style>
