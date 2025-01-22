export function CustomInput(props: any, { emit }: any) {
  const inputChangeHandler = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    emit("update:modelValue", inputElement.value);
  };

  return { inputChangeHandler };
}
