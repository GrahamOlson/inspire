<template>
  <div class="toDo">
    <form @submit.prevent="createToDo(); newToDo = {}">
      <input type="text" placeholder="what would you like to do today?" v-model="newToDo.message">
      <button class="btn btn-dark">create task</button>
    </form>
    <div v-for="toDo in myToDos" style="display: inline;">
      <!-- <input type="checkbox" name="completed" id="completed"> -->
      <h6><input @click="completed(toDo)" v-model="toDo.completed" type="checkbox"> {{toDo.message}}<sup @click="deleteToDo(toDo.id)">
          x</sup></h6>
      <!-- <span @click="deleteToDo(toDo.id)">x</span> -->
    </div>
  </div>
</template>


<script>
  export default {
    name: 'toDo',
    data() {
      return {
        newToDo: {}
      }
    },
    mounted() {
      this.$store.dispatch('getMyToDos', this.user.uid)
    },
    computed: {
      toDos() {
        return this.$store.state.toDos
      },
      user() {
        return this.$store.state.user
      },
      toDos() {
        return this.$store.state.toDos
      },
      myToDos() {
        return this.$store.state.myToDos
      },
      toDo() {
        return this.$store.state.toDo
      }
    },
    methods: {
      createToDo() {
        this.newToDo.userId = this.user.uid
        this.newToDo.completed = false
        this.$store.dispatch('createToDo', this.newToDo)
        this.$store.dispatch('getMyToDos', this.user.uid)
      },
      deleteToDo(id) {
        this.$store.dispatch('deleteToDo', id)
        this.$store.dispatch('getMyToDos', this.user.uid)
      },
      completed(toDo) {
        this.$store.dispatch('completeToDo', toDo)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>