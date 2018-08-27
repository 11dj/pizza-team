<template>
  <div class="create" id='flex-body'>
    <Sidebar />
    <div class="home-admin-div">
      <div class="home-admin-header">
        <div>หน้านี้เอาไว้ทดสอบต่างๆ</div>
      </div>
      <div class="home-admin-body">
        <div class="home-admin-input-div">
          <div>Text here</div>
          <div>Test Vuex : {{ testx }}</div>
          <button @click="getCompanyArrayLength">getTotal</button>
          <div>that's is : {{totalCompany}} </div>
        </div>

    
      </div>
    </div>
  </div>
</template>
<script>
import AuctionSystem from '@/views/DApp'
import Sidebar from '@/components/SideBar.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      msgg: 'Helo',
      auctionSystem: null,
      totalCompany: null,
    }
  },
  components: {
    Sidebar,
  },
  computed: {
    ...mapGetters({
      testx: 'getfirstX',
    })
  },
  mounted () {
    console.log('mounted 1')
    this.auctionSystem = new AuctionSystem()
    console.log('mounted 2')
  },
  methods: {
    async getCompanyArrayLength () {
      let totalCompany = await this.auctionSystem.getCompanyArrayLength()
      console.log(`first ${totalCompany}`)
      this.totalCompany = totalCompany;
      // return this.totalCompany
    },
  }
};
</script>
<style>
body {
  background: lightcyan;
}
.home-admin-div {
  width: 100vw;
  /* background: green; */
}

.home-admin-header {
  margin: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.home-admin-add-btn {
  font-size: 24px;
  padding: 4px 8px;
  border: 1px solid #eee;
  background: white;
  padding: 6px 18px;
}
.home-admin-add-btn:hover  {
  background: #eee;
}
.home-admin-add-btn:active {
  background: #ddd;
}
.home-admin-body {
  margin: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  background: lightgray;
  padding: 8px 0px;
}

.home-admin-input-div {
  margin: 20px 28px;
}
.home-admin-input {
  font-size: 20px;
  padding: 4px 8px;
  border: none;
}


</style>
