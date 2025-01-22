import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import ApiService from "@/core/services/ApiService";

const app = createApp(App);

ApiService.init();

app.use(store);
app.use(router);
app.mount("#app");
