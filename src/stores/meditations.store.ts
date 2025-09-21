import { client, API_ROUTES } from '@/api';
import { type MeditationResponse, type Meditation } from '@/types/meditation';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);
  const activeMeditation = ref<Meditation | null>(null);

  async function fetchMeditations() {
    const { data } = await client().get<MeditationResponse>(API_ROUTES.meditations);
    meditations.value = data.data.meditations;
  }

  function setActiveMeditation(meditation: Meditation) {
    activeMeditation.value = meditation;
  }

  function findById(id: number) {
    return meditations.value.find((m) => m.id === id) ?? null;
  }

  return {
    meditations,
    activeMeditation,
    setActiveMeditation,
    fetchMeditations,
    findById,
  };
});
