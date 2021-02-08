<template>
  <!-- <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table> -->
  <div>
    <button id="get-btn">aaa</button>
    <div>{{ info }}</div>
  </div>
</template>

<script>

export default {
  name: 'Data',
  components: {
  },
  props: {
  },
  data() {
    return {
      info: null,
    }
  },
  computed: {
  },
  methods: {
    getData() {
      // this.axios.get('https://httpbin.org/get')
      //   .then((response) => {
      //     alert(response.data.origin);
      //   })
      //   .catch((e) => {
      //     alert(e);
      //   });
    }
  },
  mounted() {
    // this.axios.get('competitions/BL1/standings')
    //   .then(response => (this.info = response))
  },
}
</script>
