<template>
  <div>
  <p>Server Status : {{status}}</p>
  <hr>
  <button @click='changeStatus'>Change</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ServerStatus',
  data () {
    return {
      status: 'critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
