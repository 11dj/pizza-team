<template>
  <div class="create" id='flex-body'>
    <Sidebar />
    <div class="create-div">
      <div class="create-header">
        <div>สร้างโครงการใหม่</div>
        <div>
          <button v-on:click="addProj" class="create-add-btn">เพิ่ม</button>
        </div>
      </div>
      <div class="create-body">
        <div class="create-input-div">
          <div>ชื่อโครงการ</div>
          <div>
            <input v-model="projName" type="text" class="create-input">
          </div>
        </div>
        <div class="create-input-div">
          <div>คำอธิบาย</div>
          <div>
            <textarea v-model="projDesp" name="" class="create-input" id="" cols="30" rows="4"></textarea>
          </div>
        </div>
        <div class="create-input-div">
          <div>งบประมาณ</div>
          <div>
            <input v-model="projBudget" type="number" class="create-input">
          </div>
        </div>
        <div class="create-input-div">
          <div>เวลาเปิดประมูล</div>
          <div class="create-time-div">
            <div>
              วันที่
            </div>
            <datepicker v-model="timeOpen.date" input-class="create-input mg-10"></datepicker>
            <div>
              เวลา
            </div>
            <div class="time-select">
              <select class="create-input mg-10" v-model="timeOpen.hour">
                <option v-for="key in 24" :value="key":key="key">
                  {{ key }}
                </option>
              </select> :
              <select class="create-input mg-10" v-model="timeOpen.min">
                <option v-for="key in 60" :value="key":key="key">
                  {{ key }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="create-input-div">
          <div>เวลาปิดประมูล</div>
          <div class="create-time-div">
            <div>
              วันที่
            </div>
            <datepicker v-model="timeClose.date" input-class="create-input mg-10"></datepicker>
            <div>
              เวลา
            </div>
            <div class="time-select">
              <select class="create-input mg-10" v-model="timeClose.hour">
                <option v-for="key in 24" :value="key" :key="key">
                  {{ key }}
                </option>
              </select> :
              <select class="create-input mg-10" v-model="timeClose.min">
                <option v-for="key in 60" :value="key" :key="key">
                  {{ key }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="create-input-div">
          <div>เวลาปิดลงทะเบียน</div>
          <div class="create-time-div">
            <div>
              วันที่
            </div>
            <datepicker @closed="popt" v-model="regisClose.date" input-class="create-input mg-10"></datepicker>
            <div>
              เวลา
            </div>
            <div class="time-select">
              <select class="create-input mg-10" v-model="regisClose.hour">
                <option v-for="key in 24" :value="key" :key="key">
                  {{ key }}
                </option>
              </select> :
              <select class="create-input mg-10" v-model="regisClose.min">
                <option v-for="key in 60" :value="key" :key="key">
                  {{ key }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase';
import AuctionSystem from '@/views/DApp'
import Sidebar from '@/components/SideBar.vue';
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'create',
  components: {
    Sidebar,
    Datepicker
  },
  data () {
    return {
      msgg: 'Helo',
      projName: '',
      projDesp: '',
      projBudget: 0,
      timeOpen: {
        date: '',
        hour: '',
        min: ''
      },
      timeClose: {
        date: '',
        hour: '',
        min: ''
      },
      regisClose: {
        date: '',
        hour: 6,
        min: 17
      },
    }
  },
  mounted () {
    this.auctionSystem = new AuctionSystem()
  },
  methods: {
    popt: function () {
      let dateString = this.regisClose.date.toUTCString();
      dateString = dateString.split(' ').slice(0, 4).join(' ');
      console.log(parseInt( (new Date(dateString).valueOf()/1000) + (this.regisClose.hour*3600) + (this.regisClose.min*60) ,10) );
      //  
    },
    addProject : function () {
      console.log('Adddddd')
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('Oh yeah')
        // ...
      } else {
        // User is signed out.
        // ...
      }
      });
    },
    addProj : function () {
      let startStr = this.timeOpen.date.toUTCString().split(' ').slice(0, 4).join(' ');
      let endStr = this.timeClose.date.toUTCString().split(' ').slice(0, 4).join(' ');
      let closeStr = this.regisClose.date.toUTCString().split(' ').slice(0, 4).join(' ');
      let start = parseInt( (new Date(startStr).valueOf()/1000) + (this.timeOpen.hour*3600) + (this.timeOpen.min*60) ,10)
      let end = parseInt( (new Date(endStr).valueOf()/1000) + (this.timeClose.hour*3600) + (this.timeClose.min*60) ,10)
      let close = parseInt( (new Date(closeStr).valueOf()/1000) + (this.regisClose.hour*3600) + (this.regisClose.min*60) ,10)
      this.auctionSystem.createProject(projName, projDesp, start, end, close, projBudget) 
    }
  }
};
</script>
<style>
body {
  background: lightcyan;
}
.create-div {
  width: 100vw;
  /* background: green; */
}

.create-header {
  margin: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: space-between;
}

.create-add-btn {
  font-size: 24px;
  padding: 4px 8px;
  border: 1px solid #eee;
  background: white;
  padding: 6px 18px;
}
.create-add-btn:hover  {
  background: #eee;
}
.create-add-btn:active {
  background: #ddd;
}
.create-body {
  margin: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  background: lightgray;
  padding: 8px 0px;
}

.create-input-div {
  margin: 20px 28px;
}
.create-input {
  font-size: 20px;
  padding: 4px 8px;
  border: none;
}
.mg-10 {
  margin: 0px 10px;
}
.create-time-div {
  display: flex;
  margin: 10px 0px;
}


</style>
