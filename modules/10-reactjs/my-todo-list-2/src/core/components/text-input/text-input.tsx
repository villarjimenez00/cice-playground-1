import React from 'react'

import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'

export const TextInput: React.FunctionComponent<Input> = props => {
  return <BaseInput {...props}></BaseInput>
}
