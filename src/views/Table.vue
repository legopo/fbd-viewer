<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
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
        offset-lg="1"
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
        sm="3"
      >
      <v-btn
        color="primary"
        @click="getTableData"
      >CLICK ME!</v-btn>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col
        cols="12"
        lg="10"
        offset-lg="1"
      >
      <TableComponent
        :table-data="tableData"
        :loading="loading"
      />
      </v-col>
    </v-row>
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
      tableData: [],
      loading: false
    }
  },
  computed: {
  },
  methods: {
    getTableData() {
      if (this.selected.id === this.currentLeagueId) { return }

      this.loading = true

      this.axios.get(`competitions/${this.selected.id}/standings`)
        .then((response) => {
          // 現在表示中のリーグ
          this.currentLeagueId = response.data.competition.id

          /* 順位表データ作成 */
          const datas = response.data.standings[0].table
          datas.forEach((data, i) => {
            // 正の得失点差の場合に+をつける
            if (Math.sign(data.goalDifference) === 1) {
              datas[i].goalDifference = '+' + data.goalDifference
            }

            // フォーム情報をオブジェクト化して配列に入れる
            const forms = data.form.split(',').reverse()
            datas[i].form = []

            forms.forEach(form => {
              switch (form) {
                case 'W':
                  datas[i].form.push({
                    result: 'W',
                    color: 'green'
                  })
                  break;

                case 'D':
                  datas[i].form.push({
                    result: 'D',
                    color: 'orange'
                  })
                  break;

                case 'L':
                  datas[i].form.push({
                    result: 'L',
                    color: 'red'
                  })
                  break;

                default:
                  datas[i].form.push({
                    result: '?',
                    color: ''
                  })

                  break;
              }
            })

          })

          // 加工したデータ変数にセット
          this.tableData = datas
          /****/
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false
        });
    }
  },
}
</script>
