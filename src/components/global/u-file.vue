<script setup>
import { computed, defineProps, watch, defineEmits, ref } from "vue";
let value = ref(modelValue);

const { modelValue } = defineProps({
  label: String,
  modelValue: File,
});

const emits = defineEmits(["update:modelValue"]);

const uploadFile = ({ target: { files } }) => {
  const [file] = files;
  value.value = file;
};

const previewFilePath = computed(() => {
  if (!value.value) return;
  return URL.createObjectURL(value.value);
});

watch(value, () => {
  emits("update:modelValue", value.value);
});
</script>
<template>
  <div class="mt-3 mb-3">
    <span>{{ label }}</span>
    <input type="file" class="form-control" @change="uploadFile" />
  </div>
  <div v-if="previewFilePath" class="preview">
    <span></span>
    <img :src="previewFilePath" alt="" class="w-100" />
  </div>
</template>


<style lang="scss" scoped>
</style>