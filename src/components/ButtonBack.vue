<script setup lang="ts">
import IconChevronLeft from './icons/IconChevronLeft.vue'
import { Button } from '@/components/ui/button'

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>

<template>
  <Button class="w-20" variant="link">
    <IconChevronLeft class="w-4 h-4" />
    Back
  </Button>
</template>

<style scoped></style>
