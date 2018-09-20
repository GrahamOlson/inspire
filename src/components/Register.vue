<template>
  <div class="Register container-fluid">
    <div class="header">
      <form @submit.prevent="register(user); user = {}">
        <div class="register-form">
          <label for="name">name</label>
          <input type="text" name="name" id="name" v-model="user.displayName">
          <label for="email">email</label>
          <input type="email" name="email" id="email" v-model="user.email">
          <label for="password">password</label>
          <input type="password" name="password" id="password" v-model="user.password">
          <button type="submit" class="btn btn-dark">register</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Register',
    data() {
      return {
        user: {}
      }
    },
    computed: {},
    methods: {
      register(user) {
        this.$store.dispatch('register', user)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>