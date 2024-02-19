<script setup lang="ts">
import ButtonBack from '@/components/ButtonBack.vue'
import MainLayout from './MainLayout.vue'
import { Button } from '@/components/ui/button'
import { useRouter, useRoute } from 'vue-router'
import { Form } from '@/components/ui/form'
import { appSteps } from '@/mocks/steps'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

interface Props {
  title?: string
  btnDisabled?: boolean
}

const props = defineProps<Props>()

const goToNextRoute = () => {
  //@ts-ignore
  const index = appSteps.indexOf(route.name)

  if (appSteps[index + 1]) {
    router.push({ name: appSteps[index + 1] })
  }
}

const btnText = computed(() => (route.name === 'Summary' ? 'Submit' : 'Next'))

const onSubmit = () => goToNextRoute()
</script>

<template>
  <MainLayout>
    <ButtonBack @click="() => router.back()" />
    <Form class="flex flex-col justify-center items-center gap-10 px-4 h-full" @submit="onSubmit">
      <h1 class="text-2xl font-semibold">{{ props.title }}</h1>
      <slot></slot>
      <Button class="mx-4 w-full" type="submit" :disabled="props.btnDisabled">{{ btnText }}</Button>
    </Form>
  </MainLayout>
</template>

<style scoped></style>
