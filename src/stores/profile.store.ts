import { client, API_ROUTES } from '@/api';
import type { Profile } from '@/types/profile';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const { data } = await client().get<Profile>(API_ROUTES.profile);
    profile.value = data;
  }

  return { profile, fetchProfile };
});
