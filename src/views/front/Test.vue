<template>
  <div>
    <button @click="getCompanyArrayLength">getTotal</button>
    sdfsdf {{totalCompany}} asdf
    <!-- <div v-if='web3'>
      web3 version {{ web3.version }}
    </div>
    <div class='metamask-info'> -->
      <!-- <p>Metamask: {{ web3.version }}</p> -->

    <!-- </div> -->
  </div>
</template>

<script>
// import Web3 from 'web3';
// import pizzaCoinAbi from '@/abi/PizzaCoinAbi.json';

import AuctionSystem from '@/views/DApp'


let xweb3;

export default {
  name: 'Test',
  data () {
    return {
      auctionSystem: null,
      totalCompany: null,
    }
  },
  mounted () {
    console.log('mounted')
    this.auctionSystem = new AuctionSystem()
  },
  methods: {
    async getCompanyArrayLength () {
      let totalCompany = await this.auctionSystem.getCompanyArrayLength()
      console.log(`total ${totalCompany}`)
      this.totalCompany = totalCompany;
    },
  }
}

</script>

<style scoped>
</style>
