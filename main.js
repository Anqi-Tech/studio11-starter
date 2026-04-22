import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./home/main.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Add your routes here
  ],
});

createApp({
  template: "#template",
  components: {
    Home: defineAsyncComponent(Home),
  },
})
  .use(router)
  .mount("#app");
