<template>
  <div id="app">
    <v-app dark>
      <v-toolbar fixed app>
        <v-toolbar-title ml-100>ZEMA</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
        >
          <v-icon>menu</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <welcome-view></welcome-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import WelcomeView from '@/components/WelcomeView'
  export default {
    components: {
      WelcomeView
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
