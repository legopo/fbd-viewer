<template>
  <div>
    <button id="get-btn" @click="getData()">GET</button>
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="20"
      class="elevation-1"
    ></v-data-table>
    <div>{{ data }}</div>
  </div>
</template>

<script>

export default {
  name: 'TableComponent',
  components: {
  },
  props: {
  },
  data() {
    return {
      headers: [
        {
          value: 'id',
          text: 'ID',
        },
        {
          value: 'name',
          text: 'Name',
        },
      ],
      data: []
    }
  },
  computed: {
  },
  methods: {
    getData() {
      this.axios.get('competitions/2021/teams')
        .then((response) => {
          this.data = response.data.teams
        })
        .catch((e) => {
          alert(e);
        });
    }
  },
  mounted() {
  },
}
</script>
