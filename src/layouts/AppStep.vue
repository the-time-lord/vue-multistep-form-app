<script setup lang="ts">
import ButtonBack from '@/components/ButtonBack.vue'
import MainLayout from './MainLayout.vue'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <MainLayout>
    <ButtonBack @click="() => router.back()" />
    <div class="flex flex-col justify-center items-center gap-10 px-4 h-full">
      <h1 class="text-2xl font-semibold">{{ props.title }}</h1>
      <slot></slot>
      <Button class="mx-4 w-full">Next</Button>
    </div>
  </MainLayout>
</template>

<style scoped></style>
