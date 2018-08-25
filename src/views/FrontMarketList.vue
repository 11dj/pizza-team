<template>
  <div>
    <div class="container">
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ชื่อโครงการ</th>
            <th>เวลาสิ้นสุด</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ชื่อโครงการที่ 0</td>
            <td>21/8/2018</td>
            <td><b-tag type="is-danger">ปิด</b-tag></td>
          </tr>
          <tr>
            <td><router-link to='/front/projectdetail'>ชื่อโครงการที่ ๑</router-link></td>
            <td>5/9/2018</td>
            <td><b-tag type="is-primary">เปิด</b-tag></td>
          </tr>
          <tr>
            <td>ชื่อโครงการที่ 2</td>
            <td>5/9/2019</td>
            <td><b-tag type="is-primary">เปิด</b-tag></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);
export default {};
</script>

<style scoped>
</style>
