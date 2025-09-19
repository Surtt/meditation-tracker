import { API_ROUTES, client } from '@/api';
import { type StatResponse } from '@/types/stat';
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', () => {
  async function setFeeling(type: string, value: number) {
    await client().post<StatResponse>(API_ROUTES.stats, {
      type,
      value,
    });
  }
  return { setFeeling };
});
