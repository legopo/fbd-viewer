<template>
  <v-card>
    <v-tabs
      dark
      background-color="teal darken-3"
      show-arrows
    >
      <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
      <v-tab to="/">Home</v-tab>
      <v-tab to="/table">Table</v-tab>
      <v-tab>Three</v-tab>
      <v-tab>Four</v-tab>
      <v-tab>Five</v-tab>
      <v-tab>Six</v-tab>
      <v-tab>Seven</v-tab>
      <v-tab>Eight</v-tab>
      <v-tab>Nine</v-tab>
      <v-tab>Ten</v-tab>
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
