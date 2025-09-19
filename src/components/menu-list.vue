<script setup lang="ts">
import ExitIcon from "@/icons/exit-icon.vue";
import MeditationsIcon from "@/icons/meditations-icon.vue";
import StatisticsIcon from "@/icons/statistics-icon.vue";
import { useAuthStore } from "@/stores/auth.store";
import { RouterLink, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

function logout() {
	authStore.clearToken();
	router.push({ name: "login" });
}
</script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">
        <MeditationsIcon />
        <RouterLink active-class="active" class="menu__link" to="/meditations"
          >Медитация</RouterLink
        >
      </li>
      <span class="divider"></span>
      <li class="menu__item">
        <StatisticsIcon />
        <RouterLink active-class="active" class="menu__link" to="/statistics"
          >Статистика</RouterLink
        >
      </li>
      <span class="divider"></span>
      <li class="menu__item">
        <ExitIcon />
        <a class="menu__link" @click="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
}

.menu__list {
  display: flex;
  gap: 55px;
}

.menu__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.menu__link {
  color: color-mix(in srgb, var(--primary-color) 50%, transparent);
}

.active {
  color: var(--primary-color);
}

.divider {
  width: 3px;
  height: 92px;
  background-color: var(--bg-divider);
}
</style>
