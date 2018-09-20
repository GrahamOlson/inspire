<template>
  <div class="quote">
    <h4>"{{quote.quote}}"</h4>
    <h5>- {{quote.author}}</h5>

  </div>
</template>


<script>
  export default {
    name: 'quote',
    data() {
      return {}
    },
    computed: {
      quote() {
        return this.$store.state.quote
      }
    },
    methods: {
      getQuote() {
        this.$store.dispatch('getQuote')
        console.log('some shit')
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>