<template>
  <span :class="`tag-margin tag is-tag is-tag-${size}`"><slot></slot></span>
</template>

<script>
export default {
  name: 'Tag',
  props: ['size']
}
</script>

<style lang="sass" scoped>
@import '@/mq.sass'
.tag.is-tag-large
  font-size: 1.25rem

.tag.is-tag-medium
  font-size: 1rem

.tag.is-tag-medium
  font-size: 0.75rem

.tag.is-tag
  height: 35px
  background-color: white
  color: $secondary
  border: 2px solid $secondary
  border-radius: 0
  &:hover
    background-color: $secondary
    color: white
    transition: all 0.5s
</style>
