<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import IconAsync from './IconAsync.vue'

interface Props {
  iconName: string
  text: string
  selected?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <Card
    class="pt-6 w-full max-w-[350px] cursor-pointer bg-gray-100 hover:bg-gray-200 hover:border-gray-400"
    :class="
      props.selected && 'bg-gray-200 border-gray-400 shadow-[0_0_0_4px_rgba(229,231,235,0.6)]'
    "
  >
    <CardContent class="flex flex-col items-center font-medium gap-4">
      <IconAsync :name="props.iconName" class="w-[72px] h-[72px]" />
      {{ props.text }}
    </CardContent>
  </Card>
</template>

<style scoped></style>
