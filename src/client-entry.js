import { app } from "./app";
import router from "./router";

router.onReady(() => {
  app.$mount("#app");
});
