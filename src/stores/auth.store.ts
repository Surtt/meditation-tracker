import { client, API_ROUTES } from '@/api';
import type { LoginResponse } from '@/types/login';
import type { RegisterResponse } from '@/types/register';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const TOKEN_STORE_KEY = 'tracker-token';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY);
  if (initialValue) {
    token.value = initialValue;
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value);

  async function login(username: string, password: string) {
    const { data } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
      username,
      password,
    });
    setToken(data.data.token);
  }

  async function register(username: string, email: string, password: string) {
    await client().post<RegisterResponse>(API_ROUTES.auth.register, {
      username,
      email,
      password,
    });
  }

  return { getToken, login, register, setToken, clearToken };
});
