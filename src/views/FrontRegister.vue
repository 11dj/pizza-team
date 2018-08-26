<template>
<div>
  <div class='container'>
    <h1 class='title'>Register</h1>
    <b-field label='user'>
        <b-input v-model='user'
            type='input'
            placeholder='Your Wallet'
            required>
        </b-input>
    </b-field>

    <b-field label='name'>
        <b-input v-model='name'
            type='input'
            placeholder='Your company name'
            required>
        </b-input>
    </b-field>
    <button class='button is-primary' @click="register">Register</button>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import AuctionSystem from './DApp.js'

Vue.use(Buefy);
export default {
    data () {
        return {
            user: null,
            name: null,
        }
    },
    // props: {
    //     user: String,
    //     name: String,
    // },
  mounted () {
    console.log('mounted')
    this.auctionSystem = new AuctionSystem()
  },
  methods: {
    async register (user, name) {
      let regist = await this.auctionSystem.register(user, name)

    },
  }
};
</script>

<style scoped>
</style>
