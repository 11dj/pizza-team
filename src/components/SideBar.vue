<template>
  <div class="side-bar">
    <div class="sidebar-div">
      <div class="sidebar-header">
        สัสดี แอดมิน!
      </div>
      <div class="sidebar-body" id="sidebar-nav">
        <router-link to="/admin">หน้า</router-link>
        <router-link to="/admin/create">สร้างโครงการใหม่</router-link>
        <router-link to="/admin/approve">ตรวจสอบรายชื่อ</router-link>
        <!-- <router-link to="/admin/login">ออกจากระบบ</router-link> -->
        <a style="cursor: pointer;" v-on:click="signOut" >ออกจากระแบบ</a>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'SideBar',
  methods: {
    signOut: function() {
      firebase.auth().signOut().then(function() {
        window.location.href = '/admin/login'
      }).catch(function(error) {
        console.log(error)
      });
    }
  }
};
</script>

<style lang="scss">
  .sidebar-div {
    width: 280px;
    height: 100vh;
    background: lightblue;
  }
  .sidebar-header {
    height: 100px;
    background: oldlace;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
  }
  .sidebar-body {
    text-align: right;
    margin-top: 20px;
    margin-right: 20px;
    font-size: 24px;
  }
  #sidebar-nav {
  display: flex;
  flex-direction: column;
  a {
    margin: 8px 0px;
    font-weight: bold;
    color: #111;
    text-decoration: none;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}

</style>
