<script setup lang="ts">
import Clouds from "@/components/clouds.vue";

defineProps<{
	value: number;
	label: string;
	topVar: string;
	waveVar: string;
}>();
</script>

<template>
  <div class="card" :style="{ background: `var(${topVar})` }">
    <div class="top">
      <div class="value">{{ value }}</div>
    </div>
    <div class="bottom">
      <Clouds :fill="`var(${waveVar})`" />
      <div class="label">{{ label }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  min-height: 200px;
  display: grid;
  grid-template-rows: 1fr auto;
  color: var(--stat-text, rgba(255, 255, 255, 1));
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
}
.top {
  padding: 22px 24px 0;
  display: grid;
  align-content: start;
}
.value {
  font-weight: 800;
  font-size: clamp(36px, 6vw, 72px);
  line-height: 1;
}
.bottom {
  position: relative;
  padding: 16px 24px 20px;
}
.label {
  font-weight: 600;
  font-size: clamp(14px, 2.4vw, 18px);
  opacity: 0.95;
}
.bottom :deep(svg.clouds) {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
