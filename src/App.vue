<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content>
        <v-container fluid fill-height>
          <WelcomeView v-if="!file" />
          <Viewer v-if="file" />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import WelcomeView from '@/components/WelcomeView'
import Viewer from '@/components/Viewer'
import Header from '@/components/Header'

export default {
  components: {
    WelcomeView,
    Viewer,
    Header
  },
  computed: {
    ...mapState({
      file: state => state.File.file
    })
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
