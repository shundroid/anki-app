<template>
  <div id="app">
    <v-app dark>
      <Header />
      <v-content>
        <v-container fluid fill-height>
          <WelcomeView />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import WelcomeView from '@/components/WelcomeView'
import Header from '@/components/Header'
export default {
  components: {
    WelcomeView,
    Header
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
