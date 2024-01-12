<template>
  <input
    v-bind="$attrs"
    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>
