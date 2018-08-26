<template>
  <div class="login">
    <div class="container">
      <div class="login-div">
        <div class="login-title-s">หน้าเข้าสู่ระบบ</div>
        <div class="login-input">
          <div class="login-title">ชื่อผู้ใช้</div>
          <input class="login-input" v-model="username" type="text">
          <div class="login-title">รหัสผ่าน</div>
          <input class="login-input" v-model="password" type="password">
        </div>
        <div id='text-process'>ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง</div>
        <div class="submit-div">
          <button type="submit" class="submit-btn" v-on:click="signIn">เข้ารู้ระบบ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data: function() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        console.log('on click login')
        firebase.auth().signInWithEmailAndPassword(this.username, this.password).then((response) => {
          document.getElementById('text-process').style.display = 'none'
          console.log('login success')
          window.location.href = '/admin'
        }).catch(function(error) {
          document.getElementById('text-process').style.display = 'block'
          console.log('login failed')

        });
      }
    }
  }
</script>


<style>
#text-process {
  display: none;
}
body {
  background: lightcyan;
  /* text-align: center; */
}

.login-div {
  height: 400px;
  width: 400px;
  background: lavender;
  margin: 0 auto;
  margin-top: 120px;
  padding-top: 30px;
  text-align: center;
}

.login-title-s {
  font-size: 32px;
  margin-bottom: 24px;
}
.login-input {
  margin: 0 auto;
  width: 200px;
}

.login-title {
  font-size: 28px;
  width: 200px;
  text-align: left;
}

.login-input {
  font-size: 20px;
  padding: 8px 8px;
  width: 200px;
  box-sizing: border-box;
}

.submit-div {
   margin-top: 20px;
}
.submit-btn {
  padding: 8px 22px;
  font-size: 20px;
  background: white;
  border: none;
}
.submit-btn:hover {
  background: #eee;
}

.submit-btn:active {
  background: #ddd;
}


</style>
