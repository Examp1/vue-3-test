<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const { modelValue } = defineProps({
  modelValue: String,
  name: String,
  val: Number,
  label: Number,
});

const emits = defineEmits(["update:modelValue"]);

const value = ref(modelValue);

watch(value, () => {
	console.log(value);
  emits("update:modelValue", value.value);
});
</script>

<template>
  <input
    class="form-check-input"
    type="radio"
    :name="name"
    :id="label + val"
	v-model="value"
    :value="val"
  />
  <label class="form-check-label" :for="label + val" type="checkbox">
    {{ label }}
  </label>
</template>