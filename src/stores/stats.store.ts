import { API_ROUTES, client } from '@/api';
import type { StatsResponse, StatResponse } from '@/types/stat';
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', () => {
  async function fetchSummary() {
    const { data } = await client().get<StatsResponse>(API_ROUTES.stats);
    return data.data.summary;
  }
  async function setFeeling(type: string, value: number) {
    await client().post<StatResponse>(API_ROUTES.stats, {
      type,
      value,
    });
  }

  async function saveDuration(durationMin: number) {
    await client().post<StatResponse>(API_ROUTES.stats, {
      type: 'duration_min',
      value: durationMin,
    });
  }

  return { setFeeling, saveDuration, fetchSummary };
});
