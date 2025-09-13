<script setup lang="ts">
import MeditationList from "@/components/meditation-list.vue";
import AnxiousIcon from "@/icons/anxious-icon.vue";
import CalmIcon from "@/icons/calm-icon.vue";
import FocusIcon from "@/icons/focus-icon.vue";
import RelaxIcon from "@/icons/relax-icon.vue";
</script>

<template>
  <div class="container">
    <div class="left">
      <img src="/avatar.png" width="129" height="129" alt="avatar" />
      <div class="text-wrapper">
        <h2 class="title">Добро пожаловать, Наталья!</h2>
        <p class="text">Как вы сегодня себя чувствуете?</p>
      </div>
      <div class="feelings">
        <div class="icon">
          <div class="icon-wrapper"><CalmIcon /></div>
          <span class="icon-text">Спокойно</span>
        </div>
        <div class="icon">
          <div class="icon-wrapper"><RelaxIcon /></div>
          <span class="icon-text">Расслабленно</span>
        </div>
        <div class="icon">
          <div class="icon-wrapper"><FocusIcon /></div>
          <span class="icon-text">Фокусировано</span>
        </div>
        <div class="icon">
          <div class="icon-wrapper"><AnxiousIcon /></div>
          <span class="icon-text">Тревожно</span>
        </div>
      </div>
    </div>
    <MeditationList />
  </div>
</template>

<style scoped>
.container {
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.title {
  font-weight: 500;
  font-size: 36px;
  color: var(--primary-color);
  font-family: 'Alegreya';
}

.text {
  font-size: 22px;
  color: color-mix(in srgb, var(--primary-color) 70%, transparent);
}

.feelings {
  display: flex;
  gap: 22px;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 65px;
  border-radius: 16px;
  background-color: color-mix(in srgb, var(--primary-color) 90%, transparent);
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.icon-text {
  font-size: 12px;
}
</style>
