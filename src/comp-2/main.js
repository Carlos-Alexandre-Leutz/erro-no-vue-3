import { createApp } from "vue";
import App from "./launcherComponent.vue";

const element = document.querySelector("#comp-2");

if (element) {
  const app = createApp(App);
  app.mount("#comp-2");
}
