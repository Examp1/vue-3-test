<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const { modelValue } = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
    // validator: (val) => ["text", "textarea"].includes(val),
  },
});

const emits = defineEmits(["update:modelValue"]);

const value = ref(modelValue);

watch(value, () => {
  emits("update:modelValue", value.value);
});
</script>

<template>
  <input
    v-if="type !== 'textarea'"
    class="form-control mb-3"
    :type="type"
    :placeholder="placeholder"
    v-model="value"
  />
  <textarea
    v-else
    class="form-control mb-3"
    rows="3"
    :placeholder="placeholder"
    v-model="value"
  ></textarea>
</template>