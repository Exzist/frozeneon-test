import { Module } from "vuex";
import ApiService from "@/core/services/ApiService";
import { Product } from "@/assets/ts/interfaces/Product";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const state: ProductState = {
  products: [],
  loading: false,
  error: null,
};

interface ApiResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

// second parameter has any type, because i don`t have rootState interface, and rootState ither
const productModule: Module<ProductState, any> = {
  namespaced: true,
  state,
  getters: {
    allProducts: (state) => state.products,
    isLoading: (state) => state.loading,
    errorMessage: (state) => state.error,
  },
  mutations: {
    SET_PRODUCTS(state, products: Product[]) {
      state.products = products;
    },
    SET_LOADING(state, isLoading: boolean) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error: string | null) {
      state.error = error;
    },
  },
  actions: {
    async fetchProducts({ commit }, queryParams: { limit: number }) {
      commit("SET_LOADING", true);
      try {
        const response: ApiResponse = await ApiService.query(
          "products",
          queryParams
        );
        commit("SET_PRODUCTS", response.products);
      } catch (error) {
        commit("SET_ERROR", "Error while fetching products");
        console.error("API Error:", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};

export default productModule;
