import { createStore } from "vuex";
import productModule from "@/store/modules/products";

export default createStore({
  modules: {
    products: productModule,
  },
});
