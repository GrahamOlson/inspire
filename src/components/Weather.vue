<template>
  <div class="weather">
    <div class="row">
      <div class="col-12">
        <h2 @click="showF = !showF" v-if="weather.main && showF">{{fahrenheit}}&deg<sup>f</sup></h2>
        <h2 @click="showF = !showF" v-if="weather.main && !showF">{{celcius}}&deg<sup>c</sup></h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 ">
        <h4>{{location}}</h4>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'weather',
    data() {
      return {
        showF: true
      }
    },
    computed: {
      weather() {
        return this.$store.state.weather
      },
      fahrenheit() {
        return Number.parseFloat(this.$store.state.weather.main.temp * 9 / 5 - 459.67).toFixed(0)
      },
      celcius() {
        return Number.parseFloat(this.$store.state.weather.main.temp - 273.15).toFixed(0)
      },
      location() {
        return this.$store.state.weather.name
      }
    },
    methods: {
      getTemp() {
        this.$store.dispatch('getWeather')
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>