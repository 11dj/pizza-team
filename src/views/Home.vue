<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Where is Pizza?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

export default {
  name: 'home',
  components: {
    HelloWorld,
  }
  // ,
  // beforeCreate () {
  //   console.log('registerWeb3 Action dispatched from Home.vue')
  //   this.$store.dispatch('registerWeb3')
  // },
};
</script>
