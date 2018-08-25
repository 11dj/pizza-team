<template>
  <div class="container">
    <h4 class="title">
      ชื่อโครงการ ๑
    </h4>

    <div class="columns">
      <div class="column is-primary">
        <p>Countdown Timer</p>
        <Countdown end="August 28, 2018"></Countdown>
      </div>
      <div class="column">
        <b-field position="is-centered" type="is-large">
            <b-input placeholder="100,000" type="number">
            </b-input>
            <p class="control">
                <button class="button is-info is-large">ประมูล</button>
            </p>
        </b-field>
      </div>
    </div>
    <br><br>
    <div class="is-centered">
      <h5 class="title">
      ตารางแสดงการประมูลย้อนหลัง
    </h5>
    <table class="table is-bordered  is-striped is-fullwidth">
      <thead>
        <tr>
          <th>วันเวลา</th>
          <th>จำนวนเงิน</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>25/8/2018 11:59pm.</td>
          <td>200,000</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown';

export default {
  components: { Countdown },
};
</script>

<style scoped>
</style>
