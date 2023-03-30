import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLightModeStore = defineStore('light-mode', () => {
  const isLight = ref(true);

  const toggleLightMode = () => {
    isLight.value = !isLight.value;
  };

  return { isLight, toggleLightMode };
});
