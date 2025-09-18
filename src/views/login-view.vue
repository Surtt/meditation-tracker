<script setup lang="ts">
import ButtonText from "@/components/button-text.vue";
import TextInput from "@/components/text-input.vue";
import BigLogoIcon from "@/icons/big-logo-icon.vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

const form = ref<{ username?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

watch(
	() => authStore.getToken,
	() => {
		if (authStore.getToken) {
			router.push({ name: "meditations" });
		}
	},
);

function onSubmit(event: Event) {
	event.preventDefault();
	if (!form.value.username || !form.value.password) return;
	authStore.login(form.value.username, form.value.password);
	form.value = {};
}
</script>

<template>
  <div class="container">
    <div class="login">
      <BigLogoIcon />
      <form class="login-form" @submit="onSubmit">
        <TextInput type="text" v-model="form.username" placeholder="Имя пользователя" />
        <TextInput type="password" v-model="form.password" placeholder="Пароль" />
        <ButtonText type="submit">Войти в приложение</ButtonText>
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

.login {
  display: grid;
  place-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>
