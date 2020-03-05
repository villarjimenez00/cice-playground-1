import React, { useState } from 'react'
import { PasswordInput } from './password-input'
import { type } from 'os'

export default {
  title: 'PasswordInput',
  component: PasswordInput
}

const InputState: React.FC<{ isRequired: boolean }> = ({ isRequired }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <PasswordInput
        required={isRequired}
        value={value}
        label="Contraseña"
        onChange={setValue}
        type={'password'}
      ></PasswordInput>
    </>
  )
}

export const base = () => <InputState isRequired={false}></InputState>
export const required = () => <InputState isRequired={true}></InputState>
