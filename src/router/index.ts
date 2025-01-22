import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import products from "@/router/route-groups/products";

const routes: Array<RouteRecordRaw> = [products];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
