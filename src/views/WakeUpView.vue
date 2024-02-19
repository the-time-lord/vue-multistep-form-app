<script setup lang="ts">
import CardWithIcon from '@/components/CardWithIcon.vue'
import AppStep from '@/layouts/AppStep.vue'
import { useProspectDataStore } from '@/stores/prospectData'
import { storeToRefs } from 'pinia'
import { WakeUpPreferenceEnum } from '@/types'

const prospectDataStore = useProspectDataStore()

const { wakeUpPreference } = storeToRefs(prospectDataStore)
</script>

<template>
  <AppStep title="When do you prefer to wake up?">
    <div class="grid grid-cols-2 gap-6 w-full">
      <CardWithIcon
        icon-name="IconSun"
        text="I'm an early bird"
        :selected="wakeUpPreference === WakeUpPreferenceEnum.EARLY_BIRD"
        @click="() => (wakeUpPreference = WakeUpPreferenceEnum.EARLY_BIRD)"
      />
      <CardWithIcon
        icon-name="IconMoon"
        text="I'm a night owl"
        :selected="wakeUpPreference === WakeUpPreferenceEnum.NIGHT_OWL"
        @click="() => (wakeUpPreference = WakeUpPreferenceEnum.NIGHT_OWL)"
      />
    </div>
  </AppStep>
</template>

<style scoped></style>
