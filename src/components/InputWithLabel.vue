<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { computed } from 'vue'

interface Props {
  placeholder: string
  name: string
  label: string
  modelValue: string
}

const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const localModelValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})
</script>

<template>
  <div class="grid w-full items-center gap-2">
    <Label :for="props.name">{{ props.label }}</Label>
    <Input :id="props.name" :placeholder="props.placeholder" v-model="localModelValue" />
  </div>
</template>

<style scoped></style>
