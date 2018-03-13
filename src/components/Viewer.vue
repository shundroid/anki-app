<template>
  <main v-html="md">
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      md: state => state.File.md
    })
  }
}
</script>

<style scoped>

</style>
