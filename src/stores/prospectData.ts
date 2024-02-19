import { defineStore } from 'pinia'
import { ref } from 'vue'
import { WakeUpPreferenceEnum } from '@/types'

export const useProspectDataStore = defineStore('prospectData', () => {
  const wakeUpPreference = ref<WakeUpPreferenceEnum | undefined>(undefined)
  const firstName = ref('')
  const lastName = ref('')
  const country = ref('')

  return { wakeUpPreference, firstName, lastName, country }
})
