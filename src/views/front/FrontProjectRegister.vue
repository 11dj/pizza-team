<template>
  <div>
    <div>
      <p>Approval Status</p>
      <b-tag type="is-primary is-medium" v-if="approval">Approved</b-tag>
      <b-tag type="is-danger is-medium" v-else>Not Approve</b-tag>
      <div class="p-1">
        <button class="button is-primary" v-if="!approval">Request to approval</button>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);

export default {
  name: 'FrontProjectRegister',
  props: {
    approval: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.p-1 {
  padding: 1rem;
}
</style>
