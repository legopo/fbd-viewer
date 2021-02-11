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
