import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './app.vue';
import 'vuetify/dist/vuetify.min.css';
import 'slick-carousel/slick/slick.css';
import router from './routes.js';
 
Vue.use(Vuetify)
 
document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
  el: '#app',
  router,
   render: h => h(App)
  })
})