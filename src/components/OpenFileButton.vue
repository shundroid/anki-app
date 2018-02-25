<template>
  <v-btn icon @click="click">
    <v-icon>folder</v-icon>
    <input type="file" ref="file" id="file" @change="changeFile" />
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['readFile']),
    click () {
      this.$refs.file.click()
    },
    changeFile (event) {
      this.readFile(event.target.files[0])
    }
  }
}
</script>

<style scoped>
#file {
  display: none;
}
</style>
