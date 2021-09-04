import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import store from './store'
import "tailwindcss/tailwind.css";


import {db} from "./firebase";
console.log(db);

createApp(App).use(store).use(router).mount('#app')
//import VueToast from "vue-toast-notification";
//import "vue-toast-notification/dist/theme-default.css";

//Vue.use(VueToast, {
//  position: "bottom"
//});

//require("./assets/css/main.scss");

//Vue.config.productionTip = false;

//new Vue({
//  router,
//  store,
//  render: h => h(App)
//}).$mount("#app");
