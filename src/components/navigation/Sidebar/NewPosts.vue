<template>
  <div class="card-wrapper">
    <div class="card">

    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPosts',
  methods: {
    getCategories() {
      butter.category.list()
        .then((res) => {
          console.log('List of Categories:')
          console.log(res.data.data)
        })
    },
  }
}
</script>
