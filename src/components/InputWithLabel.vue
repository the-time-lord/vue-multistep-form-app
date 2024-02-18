<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
  placeholder: string
  name: string
  label: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="grid w-full items-center gap-2">
    <Label :for="props.name">{{ props.label }}</Label>
    <Input :id="props.name" :placeholder="props.placeholder" />
  </div>
</template>

<style scoped></style>
