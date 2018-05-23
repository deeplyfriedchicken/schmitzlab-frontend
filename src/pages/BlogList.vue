<template>
  <div>
    <posts></posts>
    <!-- pagination under posts -->
    <div class="section">
      <nav class="pagination is-medium is-centered">
        <a class="pagination-previous" disabled>Previous</a>
        <a class="pagination-next">Next</a>
        <ul class="pagination-list">
          <li><a class="pagination-link">1</a></li>
          <li><span class="pagination-ellipsis">&hellip;</span></li>
          <li><a class="pagination-link">45</a></li>
          <li><a class="pagination-link is-current">46</a></li>
          <li><a class="pagination-link">47</a></li>
          <li><span class="pagination-ellipsis">&hellip;</span></li>
          <li><a class="pagination-link">86</a></li>
        </ul>
      </nav>
    </div>
    <!-- end of pagination -->
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'BlogList',
  components: {
    'posts': Posts
  }
}
</script>
