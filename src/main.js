import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes';
import { store } from "./store";
import formInput from './components/form-inputs';
import PrimeVue from 'primevue/config';

import './styles/main.scss';
import "./plugins/sweetalert";
import "./plugins/bootstrap";
import "./plugins/primevue";

Vue.use(PrimeVue);
formInput.register(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
