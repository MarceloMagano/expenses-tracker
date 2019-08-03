<template>
  <div class>
    <h4>Register</h4>
    <form>
      <label form="name">Name</label>
      <div>
        <input type="name" name="name" id="name" v-model="name" required autofocus />
      </div>

      <label form="email">Email Adress</label>
      <div>
        <input type="email" name="email" id="email" v-model="email" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required />
      </div>

      <div>
        <button type="submit" @click="handleSubmit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        // post register
        // redirect to login
      } else {
        this.password = "";
        this.passwordConfirm = "";

        return alert("Passwords do not match");
      }
    }
  }
}
</script>

<style>
</style>
