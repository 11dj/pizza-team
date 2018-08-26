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
          <div>
            <button v-on:click="aaaa"test> try it </button>
          </div>
        </div>

    
      </div>
    </div>
  </div>
</template>
<script>
import web3 from '@/web3'
import Sidebar from '@/components/SideBar.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'test',
  components: {
    Sidebar,
    Datepicker,
    datetime
  },
  computed: {
    ...mapGetters({
      testx: 'getfirstX',
    })
  },
  mounted: function(){ 
    this.aaaa = web3.testfunc // now you can call this.foo() (in your functions/template)
  },
  data () {
    return {
      msgg: 'Helo'
    }
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
