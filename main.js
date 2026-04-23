import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

function loadComponent(name) {
  return () => import(`./${name}.js`).then((m) => m.default);
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Add your routes here
  ],
});

createApp({
  template: "#template",
  components: {
    Home: defineAsyncComponent(loadComponent("home")),
  },
})
  .use(router)
  .mount("#app");
