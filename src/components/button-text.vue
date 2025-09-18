<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-form-button-color);
  border: none;
  cursor: pointer;
  border-radius: 10px;
  height: 61px;
  padding: 15px 78px;
  color: var(--color-bg);
  font-size: 18px;
  min-width: 321px;
}

.button:hover {
  background: var(--bg-divider);
}
</style>
