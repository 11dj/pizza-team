<template>
  <div class='hello'>
    <h1 class="title">{{ msg }}</h1>
    <div class='columns'>
    <div class='column'>
      <h4 class="title">
        Front Office
      </h4>
      <router-link to="/front/login" class="button is-info">Login</router-link>
    </div>
    <div class='column'>
      <h4 class="title">
        Back Office
      </h4>
      <router-link to="/" class="button is-primary">Login</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Pizza Hackathon',
  props: {
    msg: {
      type: String,
      default: 'adfsadf',
    },
  },

};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
