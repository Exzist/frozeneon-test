const products = {
  path: "/",
  redirect: "/products",
  component: () => import("@/components/ui/layouts/Layout.vue"),
  meta: {},
  children: [
    {
      path: "/products",
      name: "products",
      component: () => import("@/components/ui/views/Products.vue"),
    },
  ],
};

export default products;
