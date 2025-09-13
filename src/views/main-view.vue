<script setup lang="ts">
import MenuList from "@/components/menu-list.vue";
import LogoIcon from "@/icons/logo-icon.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header class="header"><LogoIcon /><MenuList /></header>
  <main><RouterView /></main>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
