import React from 'react'
import styles from './input.module.css'
import { bind } from '../../../utils/bind'

const cx = bind(styles)

interface Props {
  label: string
  value: string
  required?: boolean
  onChange(value: string): void
}

export const Input: React.FunctionComponent<Props> = ({ label, value, onChange, required }) => {
  return (
    <label className={cx('label')}>
      {label}
      <input
        className={cx('input', { required })}
        onChange={event => onChange(event.target.value)}
        value={value}
      />
      {required && value === '' && <span className={cx('error-msg')}>Campo obligatorio</span>}
    </label>
  )
}
