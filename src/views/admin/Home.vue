<template>
  <div class="create" id='flex-body'>
    <Sidebar />
    <div class="home-admin-div">
      <div class="home-admin-header">
        <div>หน้าแรก</div>
      </div>
      <div class="home-admin-body">
        <div class="home-admin-input-div">
          <div class="home-title">รายการที่เปิดประมูลอยู่</div>
          <div class="home-table-div">
            <button v-on:click="test">Check</button>
            <div> {{ list }} </div>
            <table class="home-table" cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>ชื่อ</th>
                  <th>เปิดประมูล</th>
                  <th>ปิดประมูล</th>
                  <th>จำนวนคนประมูล</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>โปรเจค ก</td>
                  <td>25/7/2018 19:32</td>
                  <td>25/8/2018 19:32</td>
                  <td>
                    3
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>โปรเจค ข</td>
                  <td>25/8/2018 19:32</td>
                  <td>
                    26/8/2018 19:32
                  </td>
                  <td>
                    5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/SideBar.vue';
import AuctionSystem from '@/views/DApp';
import { mapGetters } from 'vuex'

export default {
  name: 'test',
  components: {
    Sidebar
  },
  computed: {
    ...mapGetters({
      testx: 'getfirstX',
    })
  },
  data () {
    return {
      msgg: 'Helo',
      list: ''
    }
  },
  mounted () {
    this.auctionSystem = new AuctionSystem()
  },
  methods: {
    async aaa () {
      let list = await this.auctionSystem.getTotalProject()
      this.list = list;
      return this.list
    },
  }
};
</script>
<style <style lang="scss">
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
.home-title {
  margin-bottom: 15px;
}

.home-table {
  width:100%;
  text-align: center;

  th {
    background:#ddd;
  }
  td{
    padding: 8px 0px;
    font-size: 18px;
    font-weight: normal;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
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
