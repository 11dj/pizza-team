<template>
  <div class="approve" id='flex-body'>
    <Sidebar />
    <div class="approve-div">
      <div class="approve-header">
        <div>รายชื่อผู้ลงทะเบียน</div>
      </div>
      <div class="approve-body">
        <div class="approve-table-div">
          <table class="approve-table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th>No.</th>
                <th>ชื่อ</th>
                <th>สถานะ</th>
                <th colspan="2">แอคชั่น</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ซาโตชิ นาฬิกาละ</td>
                <td>รออนุมาติ</td>
                <td>
                  <button v-if="textApp === 'yes'" class="approve-btn">อนุมติ</button>
                </td>
                <td>
                  <button v-if="textApp === 'yes'" class="reject-btn">ไม่อนุมติ</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>มารา อมรายตกุล</td>
                <td>อนุมัติแล้ว</td>
                <td>
                  <button v-if="textApp2 === 'yes'" class="approve-btn" disabled>อนุมติ</button>
                </td>
                <td>
                  <button v-if="textApp2 === 'yes'" class="reject-btn">ไม่อนุมติ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/SideBar.vue';
import Datepicker from 'vuejs-datepicker';
import datetime from 'vuejs-datetimepicker';

export default {
  name: 'approve',
  components: {
    Sidebar,
    Datepicker,
    datetime
  },
  data () {
    return {
      textApp: 'yes',
      textApp2: 'no'
    }
  }
};
</script>
<style lang="scss">

body {
  background: lightcyan;
}
.approve-div {
  width: 100vw;
  /* background: green; */
}

.approve-header {
  margin: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: flex-start;
}

.approve-body {
  margin: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  padding: 8px 0px;
}


.approve-table {
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

.approve-btn {
  font-size: 16px;
  padding: 4px 8px;
  border: 1px solid #eee;
  background: lightgreen;
  padding: 2px 8px;
}

.reject-btn {
  font-size: 16px;
  padding: 4px 8px;
  border: 1px solid #eee;
  background: red;
  color: white;
  padding: 2px 8px;
}


</style>
