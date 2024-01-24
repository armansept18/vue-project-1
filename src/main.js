import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import "@/assets/css/main.css";

createApp(App).use(router).use(bootstrap).use(ToastPlugin).mount("#app");
