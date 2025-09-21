<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useMeditationsStore } from "@/stores/meditations.store";
import { useStatsStore } from "@/stores/stats.store";

const medStore = useMeditationsStore();
const stats = useStatsStore();

const totalSec = computed(
	() => (medStore.activeMeditation?.duration_min ?? 0) * 60,
);
const leftSec = ref(0);
const isRunning = ref(false);
let t: number | null = null;

const elapsedSec = computed(() => Math.max(0, totalSec.value - leftSec.value));

function fmt(s: number) {
	const m = Math.floor(s / 60)
		.toString()
		.padStart(2, "0");
	const ss = Math.floor(s % 60)
		.toString()
		.padStart(2, "0");
	return `${m}:${ss}`;
}

function start() {
	if (isRunning.value || leftSec.value <= 0) return;
	isRunning.value = true;
	t = window.setInterval(() => {
		leftSec.value--;
		if (leftSec.value <= 0) {
			pause();
			finish();
		}
	}, 1000);
}

function pause() {
	isRunning.value = false;
	if (t) {
		clearInterval(t);
		t = null;
	}
}

function reset() {
	pause();
	leftSec.value = totalSec.value;
}

async function finish() {
	pause();
	const durationMin = Math.max(1, Math.round(elapsedSec.value / 60));
	await stats.saveDuration(durationMin);
}

const currentIcon = computed(() => {
	if (isRunning.value) return "⏸";
	if (elapsedSec.value > 0) return "✅";
	return "▶";
});

function onMainAction() {
	if (isRunning.value) {
		pause();
	} else if (elapsedSec.value > 0) {
		finish();
	} else {
		start();
	}
}

onMounted(() => {
	leftSec.value = totalSec.value;
});
onBeforeUnmount(() => {
	if (t) clearInterval(t);
});
</script>

<template>
  <div class="timer-page">
    <div class="circle">
      <span>{{ fmt(leftSec) }}</span>
    </div>

    <h1 class="title">{{ medStore.activeMeditation?.title }}</h1>
    <p class="desc">{{ medStore.activeMeditation?.description }}</p>

    <div class="controls">
      <button class="btn icon" @click="reset" title="Сброс">✕</button>

      <button class="btn main" @click="onMainAction">
        {{ currentIcon }}
      </button>

      <button class="btn icon" @click="reset" title="Рестарт">⟳</button>
    </div>
  </div>
</template>

<style scoped>
.timer-page {
  display: grid;
  justify-items: center;
  gap: 16px;
  padding: 32px 16px;
  background: var(--bg-color);
}
.circle {
  width: min(52vw, 300px);
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--bg-card);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25) inset;
}
.circle > span {
  font-size: clamp(28px, 6vw, 44px);
  font-weight: 700;
  color: var(--primary-inverted-color);
}
.title {
  font-family: 'Alegreya', serif;
  font-size: clamp(28px, 5vw, 40px);
  color: var(--primary-inverted-color);
}
.desc {
  opacity: 0.8;
  text-align: center;
  max-width: 640px;
}
.controls {
  display: flex;
  gap: 16px;
  align-items: center;
}
.btn {
  border: none;
  cursor: pointer;
}
.main {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #fff;
  color: #111;
  font-size: 28px;
  display: grid;
  place-items: center;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.25);
}
.icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--primary-inverted-color);
  display: grid;
  place-items: center;
}
</style>
