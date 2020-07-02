import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import QuestionsDoctorsAsk from "../views/QuestionsDoctorsAsk.vue";
import HPI from "../views/HPI.vue";
import PMH from "../views/PMH.vue";
import FHX from "../views/FHX.vue";
import SHX from "../views/SHX.vue";
import ComingSoon from "../views/ComingSoon.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/questions-doctors-ask",
    name: "Questions Doctors Ask",
    component: QuestionsDoctorsAsk
  },
  {
    path: "/questions-doctors-ask/hpi",
    name: "History of Present Illness",
    component: HPI
  },
  {
    path: "/questions-doctors-ask/pmh",
    name: "Past Medical History",
    component: PMH
  },
  {
    path: "/questions-doctors-ask/fhx",
    name: "Family Medical History",
    component: FHX
  },
  {
    path: "/questions-doctors-ask/shx",
    name: "Social History",
    component: SHX
  },
  {
    path: "/coming-soon",
    name: "Coming Soon",
    component: ComingSoon
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
