<template>
  <v-card>
    <v-tabs
      dark
      background-color="teal darken-3"
      show-arrows
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/tables">Tables</v-tab>
      <v-tab to="/rankings">Rankings</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>

export default {
  name: 'Tabs',
  components: {
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
