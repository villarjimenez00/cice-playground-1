import React, { useState } from 'react'
//import Select from 'react-select';
import { usePosition } from '../../customhooks/usePosition'
import styles from './locationselect.module.css'
import { bind } from '../../bind'
const cx = bind(styles)

export default function LocationSelect() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [selectedOption, setSelectedOption] = useState('')
  return (
    <div className={cx('locationselect')}>
      <select name="select" onChange={event => setSelectedOption(event.target.value)}>
        <option value="-1">Select Location</option>
        {options.map(op => (
          <option value={op.value}>{op.label}</option>
        ))}
      </select>
      <span>{selectedOption}</span>
    </div>
  )
}
