import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyCPPcymDN-qXXW6pdua7Nlg-GZLYPaX2QY',
  authDomain: 'pizzahack-bb459.firebaseapp.com',
  databaseURL: 'https://pizzahack-bb459.firebaseio.com',
  projectId: 'pizzahack-bb459',
  storageBucket: 'pizzahack-bb459.appspot.com',
  messagingSenderId: '502713808881'
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
