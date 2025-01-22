<template>
  <div class="product-list">
    <div class="product-list__wrapper" v-if="data.length != 0">
      <product-card v-for="product in data" :data="product" :key="product.id" />
    </div>
    <div class="product-list__loader" v-else>
      <div class="product-list__spinner"></div>
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
  },
  setup() {
    return ProductList();
  },
});
</script>

<style scoped></style>
