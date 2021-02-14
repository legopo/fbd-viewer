<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tableData"
      :items-per-page="20"
      class="elevation-1"
      :hide-default-footer="true"
      :loading="loading"
    >
      <!-- <template v-slot:[`item.position`]="{ item }">
        {{ item.position }}
      </template> -->
      <template v-slot:[`item.team.crestUrl`]="{ item }">
        <v-img :src="item.team.crestUrl" :alt="item.team.name" width="22px" height="22px"></v-img>
      </template>
      <!-- <template v-slot:[`item.goalsFor`]="{ item }">
        <span class="hidden-md-and-down">{{ item.goalsFor }}</span>
      </template>
      <template v-slot:[`item.goalsAgainst`]="{ item }">
        <span class="hidden-md-and-down">{{ item.goalsAgainst }}</span>
      </template> -->
      <template v-slot:[`item.form`]="{ item }">
        <!-- <span v-for="(value, index) in item.form" :key="index" class="mr-1 hidden-md-and-down"> -->
        <span v-for="(value, index) in item.form" :key="index" class="mr-1">
          <v-chip
            :color="value.color"
            dark
            x-small
          >
            {{ value.result }}
          </v-chip>
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'TableComponent',
  components: {
  },
  props: {
    tableData: Array,
    loading: Boolean
  },
  data() {
    return {
      headers: [
        {
          value: 'position',
          text: 'Position',
          align: 'center',
        },
        {
          value: 'team.crestUrl',
          text: '',
        },
        {
          value: 'team.name',
          text: 'Team',
        },
        {
          value: 'playedGames',
          text: 'Played',
          align: 'center',
        },
        {
          value: 'won',
          text: 'Won',
          align: 'center',
        },
        {
          value: 'draw',
          text: 'Drawn',
          align: 'center',
        },
        {
          value: 'lost',
          text: 'Lost',
          align: 'center',
        },
        {
          value: 'goalsFor',
          text: 'GF',
          align: 'center',
          // class: "hidden-md-and-down"
        },
        {
          value: 'goalsAgainst',
          text: 'GA',
          align: 'center',
          // class: "hidden-md-and-down"
        },
        {
          value: 'goalDifference',
          text: 'GD',
          align: 'center',
        },
        {
          value: 'points',
          text: 'Points',
          align: 'center',
        },
        {
          value: 'form',
          text: 'Form',
          // class: "hidden-md-and-down"
        },
      ],
      data: [],
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style scoped lang="css">
</style>