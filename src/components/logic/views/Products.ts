import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export function Products() {
  const store = useStore();
  const searchInput = ref("");
  const products = computed(() => store.state.products.products);

  const queryParams = {
    limit: 100,
  };

  onMounted(() => {
    store.dispatch("products/fetchProducts", queryParams);
  });

  return { products, searchInput };
}
