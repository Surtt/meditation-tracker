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
  gap: 10px;
  width: 127px;
  padding: 10px 26px;
  background-color: var(--bg-color);
  border-radius: 10px;
  color: var(--primary-color);
  font-size: 15px;
  font-weight: 500;
  border: none;
}
</style>
