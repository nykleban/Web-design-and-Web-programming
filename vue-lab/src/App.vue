<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-4xl mx-auto">
      <nav class="p-4 bg-gray-100 rounded-b-lg shadow-md flex gap-4"> 
        <RouterLink to="/" class="hover:text-blue-600">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-600">About</RouterLink>
        <RouterLink to="/contact" class="hover:text-blue-600">Contact</RouterLink>
        <RouterLink to="/fated/onboarding" class="hover:text-pink-600">Fated Onboarding</RouterLink>
        <RouterLink to="/fated/auth" class="hover:text-pink-600">Fated Auth</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto mt-5">
    <RouterView />
  </main>
  
</template>