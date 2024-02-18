<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { Button } from '@/components/ui/button'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const onClick = () =>
  router.push({
    name: 'steps',
    query: {
      ...route.query
    }
  })
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center justify-center gap-10 text-center h-full">
      <h1 class="text-[76px] font-black">
        Welcome <br />to
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >Multistep Form</span
        >
      </h1>
      <Button @click="onClick">Get Started</Button>
    </div>
  </MainLayout>
</template>

<style scoped></style>
