<template>
  <div>
    <div v-if='web3'>
      web3 version {{ web3.version }}
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';
import pizzaCoinAbi from '@/abi/pizzaCoinAbi';

export default {
  name: 'Web3Example',
  data() {
    return {
      web3: null,
      userAddress: '',
      pizzaCoinAddress: '0xf13695158166ecbaed23ed689873481159a873e8',
      pizzaCoinContract: null,
      pizzaCoinName: '',
      teamCount: 0,
      teamProfile: null,
      teamName: '',
      memberName: '',
      newTeamLogs: [],
      columns: [
        {
          field: 'name',
          label: 'Name',
        },
        {
          field: 'teamIndex',
          label: 'Team Index',
        },
        {
          field: 'userAddress',
          label: 'User Address',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
