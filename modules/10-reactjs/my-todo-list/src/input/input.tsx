import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './input.module.css'

const cx = classNames.bind(styles)

export default function Input() {
  const [value, setValue] = useState([])

  function onClickButton() {}
  return (
    <label htmlFor="">
      <input type="text" placeholder="...escribir tarea" className={cx('input')} />
      <button>Añadir Tarea</button>
    </label>
  )
}
