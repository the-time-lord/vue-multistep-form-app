<script setup lang="ts">
interface Props {
  title: string
  value?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-1.5 justify-center">
    <p class="text-sm font-semibold">{{ props.title }}</p>
    <p v-if="props.value">{{ props.value }}</p>
    <p v-else>N/A</p>
  </div>
</template>

<style scoped></style>
