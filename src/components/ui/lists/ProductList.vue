<template>
  <div class="product-list" ref="listContainer" @scroll="handleScroll">
    <div
      class="product-list__spacer"
      :style="{ height: `${totalHeight}px` }"
    ></div>
    <transition-group
      v-if="!isLoading"
      name="smooth-fade"
      tag="div"
      class="product-list__wrapper"
      :style="{ transform: `translateY(${startOffset}px)` }"
      :css="!!searchQuery && !isScrolling"
    >
      <product-card
        v-for="product in visibleProducts"
        :key="product.id"
        :data="product"
      />
    </transition-group>
    <div v-else class="product-list__loader">
      <div class="product-list__spinner loader"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProductList } from "@/components/logic/lists/ProductList";
import ProductCard from "@/components/ui/cards/ProductCard.vue";
import { Product } from "@/assets/ts/interfaces/Product";

export default defineComponent({
  name: "product-list",
  components: {
    ProductCard,
  },
  props: {
    data: {
      type: Array as PropType<Product[]>,
      required: true,
    },
    searchQuery: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return ProductList(props);
  },
});
</script>

<style scoped></style>
