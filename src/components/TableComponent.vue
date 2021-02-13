<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tableData"
      :items-per-page="20"
      class="elevation-1"
    >
      <template v-slot:[`item.team.crestUrl`]="{ item }">
        <v-img :src="item.team.crestUrl" :alt="item.team.name" width="22px" height="22px"></v-img>
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
    tableData: Array
  },
  data() {
    return {
      headers: [
        {
          value: 'position',
          text: 'Position',
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
        },
        {
          value: 'won',
          text: 'Won',
        },
        {
          value: 'draw',
          text: 'Drawn',
        },
        {
          value: 'lost',
          text: 'Lost',
        },
        {
          value: 'goalsFor',
          text: 'GF',
        },
        {
          value: 'goalsAgainst',
          text: 'GA',
        },
        {
          value: 'goalDifference',
          text: 'GD',
        },
        {
          value: 'points',
          text: 'Points',
        },
        // {
        //   value: 'form',
        //   text: 'Form',
        // },
      ],
      data: []
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
