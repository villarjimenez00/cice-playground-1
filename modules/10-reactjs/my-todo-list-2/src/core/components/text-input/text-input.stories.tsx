import React, { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'TextInput',
  component: TextInput
}

const InputState: React.FC<{ isRequired: boolean }> = ({ isRequired }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <TextInput
        required={isRequired}
        value={value}
        label="Nombre y Apellidos"
        onChange={setValue}
        type={'text'}
      ></TextInput>
      {value}
    </>
  )
}

export const base = () => <InputState isRequired={false}></InputState>
export const required = () => <InputState isRequired={true}></InputState>
