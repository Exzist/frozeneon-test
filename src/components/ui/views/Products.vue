<template>
  <main class="products-list">
    <section class="products-list__products products">
      <div class="products__container">
        <div class="products__wrapper">
          <custom-input
            v-model="searchInput"
            placeholder="Enter value to search"
          />
          <product-list :data="products" :searchQuery="searchInput" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Products } from "@/components/logic/views/Products";
import CustomInput from "@/components/ui/inputs/CustomInput.vue";
import ProductList from "@/components/ui/lists/ProductList.vue";

export default defineComponent({
  name: "products",
  components: {
    CustomInput,
    ProductList,
  },
  setup() {
    return Products();
  },
});
</script>

<style scoped></style>
