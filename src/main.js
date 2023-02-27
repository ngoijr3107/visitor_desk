import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
