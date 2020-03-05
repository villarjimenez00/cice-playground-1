import React, { useState } from 'react'
import { Input } from './input'

export default {
  title: 'Input',
  component: Input
}

const InputState: React.FC<{ isRequired: boolean }> = ({ isRequired }) => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input
        required={isRequired}
        value={value}
        label="Nombre y Apellidos"
        onChange={setValue}
      ></Input>
      {value}
    </>
  )
}

export const base = () => <InputState isRequired={false}></InputState>
export const required = () => <InputState isRequired={true}></InputState>
