<template>
  <router-view />
</template>

<script lang="ts">
import { Layout } from "@/components/logic/layouts/Layout";
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout",
  setup() {
    return Layout();
  },
});
</script>

<style scoped></style>
