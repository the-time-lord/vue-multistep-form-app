<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <AppHeader class="sticky top-0" />
  <main class="flex justify-center w-full">
    <div class="flex flex-col gap-6 w-[640px] min-h-[calc(100vh-56px)]">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
