import React from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../utils/bind'
import { Input } from '../input'

const cx = bind(styles)

export const BaseInput: React.FunctionComponent<Input> = ({
  label,
  value,
  onChange,
  required,
  type,
  endSlot
}) => {
  return (
    <label className={cx('label')}>
      {label}
      <input
        className={cx('input', { required })}
        onChange={event => onChange(event.target.value)}
        value={value}
        type={type}
      />
      {endSlot}
      {required && value === '' && <span className={cx('error-msg')}>Campo obligatorio</span>}
    </label>
  )
}
