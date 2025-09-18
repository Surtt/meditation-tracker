<script setup lang="ts">
import ButtonText from "@/components/button-text.vue";
import BigLogoIcon from "@/icons/big-logo-icon.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="container">
    <BigLogoIcon />
    <ButtonText @click="router.push({ name: 'register' })">Войти в приложение</ButtonText>
  </div>
</template>

<style scoped>
.container {
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: grid;
  place-items: center;
}
</style>
