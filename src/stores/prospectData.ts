import { defineStore } from 'pinia'
import { ref } from 'vue'
import { WakeUpPreferenceEnum } from '@/types'

export const useProspectDataStore = defineStore('prospectData', () => {
  const wakeUpPreference = ref<WakeUpPreferenceEnum | undefined>(undefined)
  const firstName = ref('')
  const lastName = ref('')
  const country = ref('')

  const reset = () => {
    wakeUpPreference.value = undefined
    firstName.value = ''
    lastName.value = ''
    country.value = ''
  }

  return { wakeUpPreference, firstName, lastName, country, reset }
})
