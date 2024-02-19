<script setup lang="ts">
import AppSelect from '@/components/AppSelect.vue'
import InputWithLabel from '@/components/InputWithLabel.vue'
import AppStep from '@/layouts/AppStep.vue'
import countries from '@/mocks/countries.json'
import { useProspectDataStore } from '@/stores/prospectData'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const prospectDataStore = useProspectDataStore()

const { firstName, lastName, country } = storeToRefs(prospectDataStore)

const isValid = computed(() => !!firstName.value && !!lastName.value && !!country.value)
</script>

<template>
  <AppStep title="Tell us about yourself" :btn-disabled="!isValid">
    <div class="grid col-auto grid-cols-2 gap-6 w-full">
      <InputWithLabel name="firstName" label="First name" placeholder="John" v-model="firstName" />
      <InputWithLabel name="lastName" label="Last name" placeholder="Doe" v-model="lastName" />
      <AppSelect
        id="countries"
        label="Country"
        :items="countries"
        placeholder="Select a country"
        class="col-start-1 col-end-3"
        v-model="country"
      />
    </div>
  </AppStep>
</template>

<style scoped></style>
