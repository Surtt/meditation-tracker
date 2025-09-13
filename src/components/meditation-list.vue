<script setup lang="ts">
import { useMeditationsStore } from "@/stores/meditations.store";
import { onMounted } from "vue";
import ButtonComp from "./button-comp.vue";
import StartIcon from "@/icons/start-icon.vue";

const store = useMeditationsStore();

onMounted(() => {
	store.fetchMeditations();
});
</script>

<template>
  <div class="meditation-list">
    <div class="meditation-card" v-for="meditation in store.meditations" :key="meditation.id">
      <header class="meditation-card__header">
        <h3 class="meditation-card__title">{{ meditation.title }}</h3>
        <p class="meditation-card__text">{{ meditation.description }}</p>
      </header>
      <footer class="meditation-card__footer">
        <ButtonComp>Начать <StartIcon width="13" height="13" /></ButtonComp>
        <span class="meditation-card__duration">{{ meditation.duration_min }} мин</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.meditation-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(339px, 1fr));
  gap: 22px;
}

.meditation-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 339px;
  padding: 22px 43px 23px 30px;
  background-color: var(--bg-card);
  border-radius: 20px;
}

.meditation-card__header {
  display: flex;
  flex-direction: column;
}

.meditation-card__title {
  font-family: 'Alegreya', serif;
  font-weight: 500;
  font-size: 25px;
  line-height: 100%;
  color: var(--primary-inverted-color);
}

.meditation-card__text {
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: var(--primary-inverted-color);
}

.meditation-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.meditation-card__duration {
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  color: var(--bg-color);
}
</style>
