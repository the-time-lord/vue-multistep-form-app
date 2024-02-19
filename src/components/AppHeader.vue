<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconDocument from './icons/IconDocument.vue'

const router = useRouter()
</script>

<template>
  <header class="h-14 flex items-center">
    <div class="flex items-center pl-3 gap-2 cursor-pointer" @click="() => router.push('/')">
      <IconDocument />
      <h1 class="text-2xl font-semibold uppercase">Multistep Form</h1>
    </div>
  </header>
</template>

<style scoped></style>
