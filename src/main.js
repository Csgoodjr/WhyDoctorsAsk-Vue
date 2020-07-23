import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Firebase
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

// Import Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Import Text Truncate
import TextTruncate from 'vue-text-truncate';

// Import Google Maps API (With Vue2)
import * as VueGoogleMaps from 'vue2-google-maps';

// Import Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret);
library.add(faFontAwesome);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(firestorePlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAw2VOC57tm9NsYgEfgGL9NvWJge8ufz_A",
    libraries: "places"
  }
});

Vue.component('TextTruncate', TextTruncate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export const db = firebase.initializeApp({projectId: "whydoctorsask-f0681"}).firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
