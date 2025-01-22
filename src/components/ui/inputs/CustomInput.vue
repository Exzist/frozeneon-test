<template>
  <div>
    <input
      class="input"
      type="text"
      :value="modelValue"
      @input="inputChangeHandler"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CustomInput } from "@/components/logic/inputs/CustomInput";

export default defineComponent({
  name: "custom-input",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
  setup(props, { emit }) {
    return CustomInput(props, { emit });
  },
});
</script>

<style scoped></style>
