<template>
  <section class="section">
    <div class="main-content">
      <div class="container">
        <div class="columns">
        </div>
        <div class="columns is-multiline is-centered">
          <!-- posts (image length should be 400; height can be whatever) -->
          <div class="column is-8">
            <router-view/>
          </div>
          <!-- end of posts column -->
          <sidebar></sidebar>
        </div>
      </div>
    </div>
    <!-- end of main page content -->
  </section>
</template>

<script>
import Sidebar from '@/components/navigation/Sidebar.vue'

export default {
  name: 'Blog',
  components: {
    'sidebar': Sidebar,
  }
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'
/* github.com/plasticneko

.pagination-next, .pagination-previous, .pagination-link
  background-color: #fff

/* edits made to the bulma framework
.box
  border-radius: 0px
</style>
