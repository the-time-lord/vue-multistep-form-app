<script setup lang="ts">
import { Component, defineAsyncComponent } from 'vue'

interface Props {
  name: string
}

const props = defineProps<Props>()

const IconAsyncComponent = defineAsyncComponent({
  loader: async () => {
    return import(`@/components/icons/${props.name}.vue`) as Promise<Component>
  }
})
</script>

<template>
  <IconAsyncComponent />
</template>

<style scoped></style>
