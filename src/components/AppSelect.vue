<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'

interface Props {
  label: string
  id: string
  placeholder: string
  items: any
}

const props = defineProps<Props>()
</script>

<template>
  <div class="grid w-full items-center gap-2">
    <Label :for="props.id">{{ props.label }}</Label>
    <Select :id="props.id">
      <SelectTrigger>
        <SelectValue :placeholder="props.placeholder" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem
            v-for="item in props.items"
            :value="item.value"
            :key="`${item.name}-${item.value}`"
          >
            {{ item.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped></style>
