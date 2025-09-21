<script setup lang="ts">
import { onMounted, ref } from "vue";
import StatsCard from "@/components/stats-card.vue";
import { useStatsStore } from "@/stores/stats.store";
import type { StatsSummary } from "@/types/stat";

const store = useStatsStore();

const loading = ref(true);
const error = ref<string | null>(null);
const summary = ref<StatsSummary>({
	total_minutes: 0,
	total_calm: 0,
	total_relax: 0,
	total_focus: 0,
	total_anxiety: 0,
});

onMounted(async () => {
	try {
		summary.value = await store.fetchSummary();
	} catch (e) {
		error.value = "Не удалось загрузить статистику";
		console.error(e);
	} finally {
		loading.value = false;
	}
});

const cards = [
	{
		key: "total_minutes",
		label: "Минут медитации",
		topVar: "--stat-top-teal",
		waveVar: "--stat-wave-teal",
	},
	{
		key: "total_calm",
		label: "Спокойных дней",
		topVar: "--stat-top-green",
		waveVar: "--stat-wave-green",
	},
	{
		key: "total_relax",
		label: "Расслабленных дней",
		topVar: "--stat-top-blue",
		waveVar: "--stat-wave-blue",
	},
	{
		key: "total_focus",
		label: "Фокусированных дней",
		topVar: "--stat-top-olive",
		waveVar: "--stat-wave-olive",
	},
	{
		key: "total_anxiety",
		label: "Тревожных дней",
		topVar: "--stat-top-red",
		waveVar: "--stat-wave-red",
	},
] as const;
</script>

<template>
  <section class="stats">
    <h1 class="title">Статистика</h1>

    <div v-if="loading" class="state">Загрузка…</div>
    <div v-else-if="error" class="state error">{{ error }}</div>

    <div v-else class="grid">
      <StatsCard
        v-for="c in cards"
        :key="c.key"
        :value="(summary as any)[c.key]"
        :label="c.label"
        :topVar="c.topVar"
        :waveVar="c.waveVar"
      />
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: 24px clamp(16px, 4vw, 40px);
}
.title {
  font-family: 'Alegreya', serif;
  font-size: clamp(28px, 5vw, 40px);
  color: var(--primary-inverted-color);
  margin-bottom: 16px;
}
.state {
  opacity: 0.85;
  padding: 12px 0;
}
.state.error {
  color: #ffb4b4;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: clamp(16px, 2.5vw, 28px);
}
@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
}
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
