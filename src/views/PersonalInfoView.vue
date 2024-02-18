<script setup lang="ts">
import AppSelect from '@/components/AppSelect.vue'
import InputWithLabel from '@/components/InputWithLabel.vue'
import AppStep from '@/layouts/AppStep.vue'
import countries from '@/mocks/countries.json'
</script>

<template>
  <AppStep title="Tell us about yourself">
    <div class="grid col-auto grid-cols-2 gap-6 w-full">
      <InputWithLabel name="firstName" label="First name" placeholder="John" />
      <InputWithLabel name="lastName" label="Second name" placeholder="Doe" />
      <AppSelect
        id="countries"
        label="Country"
        :items="countries"
        placeholder="Select a country"
        class="col-start-1 col-end-3"
      />
    </div>
  </AppStep>
</template>

<style scoped></style>
