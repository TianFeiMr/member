import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入axios
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
