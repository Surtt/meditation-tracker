import { client, API_ROUTES } from '@/api';
import { type MeditationResponse, type Meditation } from '@/types/meditation';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);

  async function fetchMeditations() {
    const { data } = await client().get<MeditationResponse>(API_ROUTES.meditations);
    meditations.value = data.data.meditations;
  }

  return { meditations, fetchMeditations };
});
