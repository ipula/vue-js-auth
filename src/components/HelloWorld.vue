<template>
<div class="container container-table">
      <div class="row vertical-10p">
        <div class="container">
          <img src="/static/img/logo.png" class="center-block logo">
          <div class="text-center col-md-4 col-sm-offset-4">
            <!-- login form -->
            <form class="ui form loginForm"  @submit.prevent="checkCreds">

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input class="form-control" name="username" placeholder="Username" type="text" v-model="email">
              </div>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
              </div>
              <button type="submit">Submit</button>
            </form>

            <!-- errors -->
            <div v-if=response class="text-red"><p>{{response}}</p></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import { logout } from '../utils/auth'
export default {
data () {
    return {
      testDatas: [],
      loginData: {},
      msg: 'Welcome to Your test route',
      response: '',
      email: '',
      password: '',
    }
 },
methods: {
   checkCreds: function () {
     const {username, password} = this
     this.$http
        .post('http://localhost:8000/api/v1/login', { email,password})
        .then(response => response.json())
        .then(data => {
          console.log(data)
          localStorage.setItem('token', data.token)
          if (data.token) {
            this.$router.push({path: '/'})
            }
          else {
            this.response = data.error
          }
        })
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
