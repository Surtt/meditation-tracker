<script setup lang="ts">
import ButtonText from "@/components/button-text.vue";
import TextInput from "@/components/text-input.vue";
import BigLogoIcon from "@/icons/big-logo-icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

const form = ref<{ email?: string; username?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

function onSubmit(event: Event) {
	event.preventDefault();
	if (!form.value.email || !form.value.username || !form.value.password) return;
	authStore.register(
		form.value.email,
		form.value.username,
		form.value.password,
	);
	form.value = {};
	router.push({ name: "login" });
}
</script>

<template>
  <div class="container">
    <div class="signup">
      <BigLogoIcon />
      <form class="signup-form" @submit="onSubmit">
        <TextInput type="email" v-model="form.email" placeholder="Электронная почта" />
        <TextInput type="text" v-model="form.username" placeholder="Имя" />
        <TextInput type="password" v-model="form.password" placeholder="Пароль" />
        <ButtonText type="submit">Создать аккаунт</ButtonText>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url('/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.signup {
  display: grid;
  place-items: center;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>
