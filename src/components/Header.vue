<template>
  <v-toolbar fixed app>
    <v-btn icon>
      <v-icon>menu</v-icon>
    </v-btn>
    <v-toolbar-title ml-100>ema</v-toolbar-title>
    <v-spacer></v-spacer>
    <OpenFileButton />
  </v-toolbar>
</template>

<script>
import OpenFileButton from '@/components/OpenFileButton'

export default {
  components: {
    OpenFileButton
  }
}
</script>
