<template>
  <dir>Rankings</dir>
</template>

<script>


export default {
  name: 'Rankings',
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
  mounted: function(){
      this.axios.get(`http://api.clubelo.com/Fixtures`)
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
        })
        .finally(() => {
        });
  }
}
</script>
