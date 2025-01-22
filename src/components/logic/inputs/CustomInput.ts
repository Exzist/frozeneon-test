import { CustomInputEmit } from "@/components/ui/inputs/CustomInput.vue";

export function CustomInput(emit: CustomInputEmit) {
  const inputChangeHandler = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    emit("update:modelValue", inputElement.value);
  };

  return { inputChangeHandler };
}
