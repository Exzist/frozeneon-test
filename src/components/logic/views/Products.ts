import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { Product } from "@/assets/ts/interfaces/Product";

export function Products() {
  const store = useStore();
  const searchInput = ref<string>("");
  const products = computed(() => {
    if (searchInput.value) {
      return store.state.products.products.filter((el: Product) =>
        el.title.toLowerCase().includes(searchInput.value)
      );
    } else {
      return store.state.products.products;
    }
  });

  const queryParams = {
    limit: 100,
  };

  onMounted(() => {
    store.dispatch("products/fetchProducts", queryParams);
  });

  return { products, searchInput };
}
