import React from 'react'

import { container } from './container'
import { TYPES } from './types'
import { PersonalAssistant } from './personal-assistant'

const personalAssistant = container.get<PersonalAssistant>(TYPES.PERSONAL_ASSISTANT)

export const App: React.FC = () => {
  return <h1>{personalAssistant.morningRoutine('Alejandro')}</h1>
}
