import React, { useState } from 'react'
import styles from './button.module.css'
import classNames from 'classnames'

const cx = classNames.bind(styles)

export default function Button(props: { person?: String; className: String }) {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(1)

  /**
   * Para modificar count siempre sera utilizando el la funcion setCount (setter)
   */

  return (
    <button onClick={() => setCount(count + 1)} className={cx('button', props.className)}>
      Hello {count}
    </button>
  )
}
