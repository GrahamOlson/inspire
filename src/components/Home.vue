<template>
  <div class="bg-image">

    <div class="container-fluid">


      <div class="row">
        <div class="col-3">
          <toDo v-if="user.uid"></toDo>
        </div>
        <div class="col-6">
          <h1 class="align-middle">hello, {{user.displayName}}.</h1>
          <weather></weather>
        </div>
      </div>



      <div class="row">
        <div class="quote center-text fixed-bottom">
          <quote></quote>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Weather from './Weather.vue';
  import Quote from './Quote.vue';
  // import Photo from './Photo.vue';
  import ToDo from './ToDo.vue'
  export default {
    name: 'Home',
    data() {
      return {
      }
    },
    mounted() {
      // this.$store.dispatch('getPhoto')
      this.$store.dispatch('getWeather'),
        this.$store.dispatch('getQuote')
    },
    computed: {
      user() {
        return this.$store.state.user
      }
      // photo() {
      //   return this.$store.state.photo
      //   console.log('working')

    },
    methods: {
      // getPhoto() {
      //   this.$store.dispatch('getPhoto')
      //   console.log("working")
      // }
    },
    components: {Weather, Quote, ToDo}
  }
</script>


<style scoped>
  .title {
    /* color: aliceblue; */
    color: black;
  }

  .height {
    height: 37rem;
  }



  .bg-image {
    background-image: url("https://picsum.photos/1080/1920/?random");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    top: 0;
    opacity: 5;
  }
</style>