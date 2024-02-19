import { describe, expect, test } from 'vitest'
import { mapSleeperType } from '@/utils'
import { WakeUpPreferenceEnum } from '@/types'

describe('sleeper type mapper', () => {
  test('map the code of sleeper type night owl to its corresponding name', () => {
    expect(mapSleeperType(WakeUpPreferenceEnum.NIGHT_OWL)).toBe('Night owl')
  })

  test('map the code of sleeper type early bird to its corresponding name', () => {
    expect(mapSleeperType(WakeUpPreferenceEnum.EARLY_BIRD)).toBe('Early bird')
  })

  test('return empty string if no value is passed to the mapper', () => {
    expect(mapSleeperType()).toBe('')
  })
  test('return undefined if random string is passed to the mapper', () => {
    // @ts-expect-error
    expect(mapSleeperType('hello')).toBeUndefined()
  })
})
