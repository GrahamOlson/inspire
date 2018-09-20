<template>
  <div class="Login">
    <form @submit.prevent="login(creds); creds = {}">
      <label for="email">email</label>
      <input type="email" name="email" id="email" v-model="creds.email">
      <label for="password">password</label>
      <input type="password" name="password" id="password" v-model="creds.password">
      <button type="submit" class="btn btn-dark btn-effect">login</button>
    </form>

  </div>
</template>


<script>
  export default {
    name: 'Login',
    data() {
      return {
        creds: {}
      }
    },
    computed: {},
    methods: {
      login(creds) {
        this.$store.dispatch('login', creds)
      }
    },
    components: {}
  }
</script>


<style scoped>
  .btn-effect {
    background-color: aqua;
    transition: background-color ease 2s;
  }

  .btn-effect:hover {
    background-color: red;
  }
</style>