<template>
  <div>
    <div class='container'>
      <div class="columns">
        <div class="column has-text-left">
          <p>Approval Status</p>
          <div v-if="approval">
            <b-tag type="is-info is-large">Approved</b-tag>
          </div>
          <div v-else>
            <b-tag type="is-danger is-large">Not Approve</b-tag>
          </div>
        </div>
        <div class="column has-text-right">
        <div v-if="!approval">
          <router-link to="/front/project/register" class="button is-medium">Regist</router-link>
        </div>
        </div>
      </div>
      <table class='table is-fullwidth'>
        <thead>
          <tr>
            <th style="width:20%;">หัวข้อ</th>
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ชื่อโครงการ</th>
            <td>โครงการที่ ๑</td>
          </tr>
          <tr>
            <th>วันที่เริ่มต้น</th>
            <td>10/7/2018</td>
          </tr>
          <tr>
            <th>วันที่สิ้นสุด</th>
            <td>22/9/2018</td>
          </tr>
          <tr>
            <th>สถานะ</th>
            <td><b-tag type="is-info is-large">เปิด</b-tag></td>
          </tr>
          <tr>
            <th>รายะละเอียด</th>
            <td><p>{{detail}}</p></td>
          </tr>
          <tr>
            <th>อื่นๆ</th>
            <td>อะไรสักอย่าง</td>
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
export default {
  name: 'FrontProjectDetail',
  props: {
    detail: {
      type: String,
      default: 'เอสเอ็มอีเทคโนโลยีจริยธรรมบูรณาการผสมผสานประชารัฐ อาเซียนสุขภาวะระดับสากลยุคใหม่พลเมืองวิสัยทัศน์ล้ำสมัยวิสาหกิจ จัดการพันธกิจวิสาหกิจสร้างสรรค์สุขภาวะเทคโนโลยีประชารัฐ คุณธรรมมุ่งมั่นสนธิกำลังสตาร์ทอัพจิตวิญญาณโลกาภิวัฒน์สุขภาวะวาทกรรมบริหาร ผสมผสานสนธิกำลังระดับสากลโลกาภิวัฒน์ยุคใหม่สุขภาวะสตาร์ทอัพวิสัยทัศน์ สร้างสรรค์วิสาหกิจบริหารยุคใหม่โลกาภิวัฒน์ลงทุน',
    },
    approval: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>
