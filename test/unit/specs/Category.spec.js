import "es6-promise/auto";
import Vue from "vue";
import store from "../../../src/vuex/index.js";
import VueRouter from "vue-router";
import Category from "../../../src/theme/Category.vue";
import { expect } from "chai";

describe("Category.vue", () => {
  it("should load front-end links", (done) => {
    Vue.use(VueRouter);
    const router = new VueRouter({
      routes: [{ path: "/", component: Category }],
    });

    const vm = new Vue({
      el: document.createElement("div"),
      router,
      store,
      render: (h) => h("router-view"),
    });

    // setTimeout(function () {
    //   // this works, but we are not sure whether it takes 1 sec
    //   console.log(vm.$el);
    //   done();
    // }, 1000);
    store.watch(
      (state) => {
        return state.postsModule.posts;
      },
      function () {
        // console.log(vm.$el);
        expect(vm.$el.querySelectorAll(".column").length).to.equal(6);
        done();
      }
    );
  });
});
