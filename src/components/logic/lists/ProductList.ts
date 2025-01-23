import { computed, ref } from "vue";
import { Product } from "@/assets/ts/interfaces/Product";
import { useStore } from "vuex";

export function ProductList(props: { data: Product[] }) {
  const store = useStore();
  const isLoading = computed(() => store.state.products.loading);

  const VISIBLE_COUNT = 20;
  const ITEM_HEIGHT = 300;

  const listContainer = ref<HTMLElement | null>(null);
  const startIndex = ref(0);
  const totalHeight = computed(() => props.data.length * ITEM_HEIGHT);

  // Number of elements after visible elements
  const buffer = 2;
  // Computes the visible products based on the current scroll position
  const visibleProducts = computed(() => {
    const start = Math.max(0, startIndex.value);
    const end = Math.min(
      startIndex.value + VISIBLE_COUNT + buffer,
      props.data.length
    );
    return props.data.slice(start, end);
  });

  // Computes the offset for the visible products container
  const startOffset = computed(() => {
    return Math.max(0, startIndex.value * ITEM_HEIGHT);
  });

  // Throttling mechanism to optimize scroll performance
  let ticking = false;
  const isScrolling = ref(false);
  // Handles the scroll event to update the start index
  const handleScroll = () => {
    if (!listContainer.value || ticking) return;

    isScrolling.value = true;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = listContainer.value!.scrollTop;
      const newStartIndex = Math.max(
        0,
        Math.min(
          Math.floor(scrollTop / ITEM_HEIGHT),
          props.data.length - VISIBLE_COUNT
        )
      );

      if (newStartIndex !== startIndex.value) {
        startIndex.value = newStartIndex;
      }

      isScrolling.value = false;
      ticking = false;
    });
  };

  return {
    listContainer,
    visibleProducts,
    totalHeight,
    startOffset,
    handleScroll,
    isLoading,
    isScrolling,
  };
}
