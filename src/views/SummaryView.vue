<script setup lang="ts">
import SummaryItem from '@/components/SummaryItem.vue'
import AppStep from '@/layouts/AppStep.vue'
import { useProspectDataStore } from '@/stores/prospectData'
import { storeToRefs } from 'pinia'
import { mapSleeperType } from '@/utils'

const prospectDataStore = useProspectDataStore()

const { firstName, lastName, country, wakeUpPreference } = storeToRefs(prospectDataStore)

const countryNameinEnglish = new Intl.DisplayNames(['en'], { type: 'region' })
const mappedCountryName = country.value ? countryNameinEnglish.of(country.value) : ''
</script>

<template>
  <AppStep title="Let's check if everything's correct">
    <div class="grid grid-cols-2 gap-x-3 gap-y-10 w-full">
      <SummaryItem title="First name" :value="firstName" />
      <SummaryItem title="Last name" :value="lastName" />
      <SummaryItem title="Country" :value="mappedCountryName" />
      <SummaryItem title="Sleeper type" :value="mapSleeperType(wakeUpPreference)" />
    </div>
  </AppStep>
</template>

<style scoped></style>
