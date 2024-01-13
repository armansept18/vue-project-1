import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "@/assets/css/main.css";

createApp(App).use(router).use(bootstrap).mount("#app");
