<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <p class="text-h4">Tables</p>
      </v-col>
    </v-row>
    <v-row align="center" class="mb-3">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          v-model="selected"
          :hint="`${selected.name}, ${selected.area}`"
          :items="leagues"
          item-text="name"
          item-value="id"
          label="Select"
          return-object
          persistent-hint
        ></v-select>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <v-btn
        color="primary"
        @click="getTableData"
      >CLICK ME!</v-btn>
      </v-col>
    </v-row>
    <TableComponent
      :table-data="tableData"
    />
  </v-container>
</template>

<script>
import TableComponent from '../components/TableComponent'


export default {
  name: 'Table',
  components: {
    TableComponent,
  },
  props: {
  },
  data() {
    return {
      currentLeagueId: null,
      selected: { id: 2021, name: 'Premier League', area: 'England'},
      leagues: [
        { id: 2021, name: 'Premier League', area: 'England'},
        { id: 2019, name: 'Serie A', area: 'Italy'},
        { id: 2017, name: 'Primeira Liga', area: 'Portugal'},
        { id: 2014, name: 'Primera Division', area: 'Spain'},
        { id: 2003, name: 'Eredivisie', area: 'Netherlands'},
        { id: 2002, name: 'Bundesliga',area: 'Germany'},
        { id: 2001, name: 'UEFA Champions League', area: 'Europe'},
      ],
      tableData: []
    }
  },
  computed: {
  },
  methods: {
    getTableData() {
      if (this.selected.id === this.currentLeagueId) { return }

      this.axios.get(`competitions/${this.selected.id}/standings?standingType=HOME`)
        .then((response) => {
          // 現在表示中のリーグ
          this.currentLeagueId = response.data.competition.id

          // 順位表データ作成
          const data = response.data.standings[0].table
          data.forEach((item, i) => {
            if (Math.sign(item.goalDifference) === 1) {
              data[i].goalDifference = '+' + item.goalDifference
            }
          })
          this.tableData = data
          //
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
}
</script>
