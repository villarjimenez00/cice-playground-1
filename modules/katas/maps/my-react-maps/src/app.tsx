import React from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { usePosition } from './usePosition'
const cx = bind(styles)

export function App() {
  const { latitude, longitude, error } = usePosition()

  return (
    <div className={cx('app')}>
      <code>
        latitude: {latitude}
        <br />
        longitude: {longitude}
        <br />
        {error}
      </code>
    </div>
  )
}
