<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-card__image">
        <img :src="data?.images[0]" />
      </div>
      <div class="product-card__content">
        <h2 class="product-card__content-title">{{ data?.title }}</h2>
        <p class="product-card__content-description">{{ data?.description }}</p>
        <div class="product-card__content-group">
          <p class="product-card__content-text product-card__content-text_red">
            {{ `Discount ${data?.discountPercentage} %` }}
          </p>
          <p class="product-card__content-text">{{ data?.brand }}</p>
        </div>
        <div class="product-card__content-group">
          <p class="product-card__content-text">
            {{ `$ ${data?.price}` }}
          </p>
          <p class="product-card__content-text">{{ data?.rating }}</p>
          <p class="product-card__content-category">{{ data?.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ProductCard } from "@/components/logic/cards/ProductCard";
import { Product } from "@/assets/ts/interfaces/Product";

export default defineComponent({
  name: "product-card",
  props: {
    data: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    return ProductCard();
  },
});
</script>

<style scoped></style>
