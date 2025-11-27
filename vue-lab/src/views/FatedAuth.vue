<template>
  <div class="min-h-screen flex items-center justify-center text-white">
    <div
      class="flex flex-col items-center justify-start text-center w-[375px] h-[812px] border border-black bg-brand box-border"
    >
      <div class="my-[12.6%] mt-28">
        <div class="w-[100px] h-[100px] mx-auto flex items-center justify-center mt-5">
          <img
            :src="heartIcon"
            alt="Pulsing Heart"
            class="w-[100px] h-[100px]"
            style="animation: pulse 1.2s ease-in-out infinite; transform-origin: center"
          />
        </div>
        <div class="font-luckiest text-[50px] tracking-[3px] mt-2 mb-14">FATED</div>
      </div>
      <div class="w-[280px]">
        <div class="flex justify-center gap-3 mb-5">
          <button
            type="button"
            class="w-[130px] h-[30px] text-[12px] font-black tracking-wider rounded"
            :class="activeTab === 'login' ? 'bg-white text-brand' : 'bg-white/10 hover:bg-white/20'"
            @click="setTab('login')"
          >
            LOGIN
          </button>

          <button
            type="button"
            class="w-[130px] h-[30px] text-[12px] font-black tracking-wider rounded"
            :class="
              activeTab === 'register' ? 'bg-white text-brand' : 'bg-white/10 hover:bg-white/20'
            "
            @click="setTab('register')"
          >
            REGISTER
          </button>
        </div>

        <form v-if="activeTab === 'login'" class="space-y-2.5" @submit.prevent="onLogin">
          <input
            v-model="loginForm.username"
            type="text"
            placeholder="user name"
            class="font-lato w-full bg-white rounded px-2.5 py-3 text-[15px] tracking-[0.23em] text-center block text-brand focus:outline-none focus:bg-[#fff5f5] focus:shadow-[0_0_10px_rgba(255,95,95,0.3)]"
          />
          <input
            v-model="loginForm.password"
            type="password"
            placeholder="password"
            class="font-lato w-full bg-white rounded px-2.5 py-3 text-[15px] tracking-[0.23em] text-center block text-brand focus:outline-none focus:bg-[#fff5f5] focus:shadow-[0_0_10px_rgba(255,95,95,0.3)]"
          />

          <div class="mt-3 text-[10px] text-right">
            <a href="#" class="text-white no-underline">FORGOT PASSWORD?</a>
          </div>

          <button
            type="submit"
            class="mt-5 w-full h-[46px] bg-white text-brand font-bold text-[15px] rounded px-2.5 py-3 tracking-wider hover:bg-[#ffdbdb] transition"
          >
            LOGIN
          </button>

          <p class="mt-5 text-[10px] text-white">
            DON'T HAVE AN ACCOUNT?
            <span class="font-black cursor-pointer" @click="setTab('register')">REGISTER</span>
          </p>
        </form>

        <form v-else class="space-y-2.5" @submit.prevent="onRegister">
          <input
            v-model="registerForm.username"
            type="text"
            placeholder="user name"
            class="font-lato w-full bg-white rounded px-2.5 py-3 text-[15px] tracking-[0.23em] text-center block text-brand focus:outline-none focus:bg-[#fff5f5] focus:shadow-[0_0_10px_rgba(255,95,95,0.3)]"
          />
          <input
            v-model="registerForm.password"
            type="password"
            placeholder="password"
            class="font-lato w-full bg-white rounded px-2.5 py-3 text-[15px] tracking-[0.23em] text-center block text-brand focus:outline-none focus:bg-[#fff5f5] focus:shadow-[0_0_10px_rgba(255,95,95,0.3)]"
          />
          <input
            v-model="registerForm.email"
            type="email"
            placeholder="email"
            class="font-lato w-full bg-white rounded px-2.5 py-3 text-[15px] tracking-[0.23em] text-center block text-brand focus:outline-none focus:bg-[#fff5f5] focus:shadow-[0_0_10px_rgba(255,95,95,0.3)]"
          />

          <div class="mt-3 text-[10px] text-right">
            <a href="#" class="text-white no-underline">FORGOT PASSWORD?</a>
          </div>

          <button
            type="submit"
            class="mt-5 w-full h-[46px] bg-white text-brand font-bold text-[15px] rounded px-2.5 py-3 tracking-wider hover:bg-[#ffdbdb] transition"
          >
            REGISTER
          </button>

          <p class="mt-5 text-[10px] text-white">
            ALREADY HAVE AN ACCOUNT?
            <span class="font-black cursor-pointer" @click="setTab('login')">LOGIN</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import heartIcon from '@/assets/pepicons-pencil_heart-filled-circle-filled.svg'

const activeTab = ref('login')

const loginForm = reactive({
  username: '',
  password: '',
})

const registerForm = reactive({
  username: '',
  password: '',
  email: '',
})

const setTab = (tab) => {
  activeTab.value = tab
}

const onLogin = () => {
  console.log('Login:', loginForm)
}

const onRegister = () => {
  console.log('Register:', registerForm)
}
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
