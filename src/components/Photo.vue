<template>
  <div class="photo">
    <!-- <div class="container-fluid img-fluid" :style="{ backgroundImage: 'url(' + photo + ')'}"></div> -->

    <p>fuck you</p>

  </div>
</template>


<script>
  export default {
    name: 'photo',
    data() {
      return {}
    },
    mounted() {
      // this.$store.dispatch('getPhoto')
    },
    computed: {
      photo() {
        return this.$store.state.photo.large_url || this.$store.state.photo.url
        console.log('working')
      }
    },
    methods: {
      getPhoto() {
        // this.$store.dispatch('getPhoto')
        // console.log("working")
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>