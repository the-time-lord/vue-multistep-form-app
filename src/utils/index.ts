import { sleeperType, type WakeUpPreferenceEnum } from '@/types'

export const mapSleeperType = (preferenceCode?: WakeUpPreferenceEnum) =>
  preferenceCode ? sleeperType[preferenceCode] : ''
