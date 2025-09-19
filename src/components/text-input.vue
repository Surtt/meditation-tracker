<script setup lang="ts">
const data = defineModel<string>();
</script>

<template>
  <input class="text-input" v-model="data" />
</template>

<style scoped>
.text-input {
  border: none;
  border-bottom: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 18px;
  min-width: 305px;
  padding: 10px;
  background-color: transparent;
}

.text-input::placeholder {
  color: var(--form-text-color);
}
</style>
