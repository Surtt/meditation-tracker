import axios from 'axios';
import { useAuthStore } from './stores/auth.store';

export const BASE_URL = 'http://localhost:3000/api';

export const API_ROUTES = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  meditations: '/meditations',
};

export function client() {
  const authStore = useAuthStore();
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  });
}
