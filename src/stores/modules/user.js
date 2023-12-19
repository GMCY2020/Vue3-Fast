import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'vue3Fast-user',
  () => {
    const isLogin = ref(false)

    const setIsLogin = (v) => {
      isLogin.value = v
    }

    const user = ref({})

    const setUser = (u) => {
      user.value = u
    }

    return {
      isLogin,
      setIsLogin,
      user,
      setUser
    }
  },
  {
    persist: true
  }
)
