<template>
  <div class="main-admin">
    <SideBar/>
    <Home/>
  </div>
</template>
<script>
import Sidebar from '@/components/SideBar.vue';
import Home from '@/views/admin/Home.vue';

export default {
  name: 'main-admin',
  components: {
    Sidebar,
    Home
  },
}
</script>


<style lang="scss">
</style>
