<template>

</template>

<script>
export default {
  name: 'Page',
  beforeRouteUpdate (to, from, next) {
    // just use `this`
    next()
  }
}
</script>
