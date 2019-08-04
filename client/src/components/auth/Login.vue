<template>
  <div class>
    <h4>Login</h4>
    <form>
      <label form="email">Email Adress</label>
      <div>
        <input type="email" name="email" id="email" v-model="email" required autofocus />
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required />
        </div>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import { server } from '../../helper'
import router from '../../router'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      let user = {
        email: this.email,
        password: this.password
      }
      if (this.password.length > 0) {
        // post login
        axios.post(`${server.baseUrl}/auth/login`, user)
          .then(data => { console.log(data.data.token) })
          .then(data => {
            router.push({ name: 'home' })
          })
        // set jwt to localStorage
      }
    }
  }
}
</script>
