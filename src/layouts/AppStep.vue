<script setup lang="ts">
import ButtonBack from '@/components/ButtonBack.vue'
import MainLayout from './MainLayout.vue'
import { Button } from '@/components/ui/button'
import { useRouter, useRoute } from 'vue-router'
import { Form } from '@/components/ui/form'

const router = useRouter()
const route = useRoute()

const onSubmit = () =>
  router.push({
    name: 'PersonalInfo',
    query: {
      ...route.query
    }
  })

interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <MainLayout>
    <ButtonBack @click="() => router.back()" />
    <Form class="flex flex-col justify-center items-center gap-10 px-4 h-full" @submit="onSubmit">
      <h1 class="text-2xl font-semibold">{{ props.title }}</h1>

      <slot></slot>
      <Button class="mx-4 w-full" type="submit">Next</Button>
    </Form>
  </MainLayout>
</template>

<style scoped></style>
