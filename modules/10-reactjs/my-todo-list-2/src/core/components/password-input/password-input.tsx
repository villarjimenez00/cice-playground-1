import React, { useState } from 'react'

import { BaseInput } from '../base-input/base-input'
import { Icon } from '../icon/icon'
import { Input } from '../input'

export const PasswordInput: React.FunctionComponent<Input> = ({
  label,
  value,
  onChange,
  required,
  type
}) => {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <BaseInput
      label={label}
      value={value}
      type={isShowing ? 'text' : 'password'}
      onChange={onChange}
      endSlot={
        <Icon
          onClick={() => setIsShowing(!isShowing)}
          name={isShowing ? 'openEye' : 'closedEye'}
        ></Icon>
      }
    ></BaseInput>
  )
}
