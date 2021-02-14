<template>
  <v-app>
    <Tabs />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Tabs from './components/Tabs'

export default {
  name: 'App',
  components: {
    Tabs
  },
  props: {
  },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style>
  #app {
    font-family: 'Heebo', 'Noto Sans JP', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
