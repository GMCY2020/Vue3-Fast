import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDebugStore = defineStore(
  'vue3Fast-debug',
  () => {
    const isStartDebug = ref(true)

    return { isStartDebug }
  },
  {
    persist: true
  }
)
