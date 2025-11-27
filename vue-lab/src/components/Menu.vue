<script setup>
import { menuItems } from '@/menu/Menu.js'
</script>

<template>
  <nav>
    <ul>
      <li v-for="section in menuItems" :key="section.id">
        <strong>{{ section.label }}</strong>

        <ul class="ml-4">
          <li
            v-for="item in section.children"
            :key="item.id"
          >
            <RouterLink :to="item.route">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
