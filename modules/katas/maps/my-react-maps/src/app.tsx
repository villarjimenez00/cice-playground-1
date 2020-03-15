import React from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { usePosition } from './customhooks/usePosition'
import MyMap from './components/mymap/mymap'
const cx = bind(styles)

export function App() {
  const { latitude, longitude, error } = usePosition()

  return (
    <>
      <div className={cx('app')}>
        {latitude === 0 && longitude === 0 ? (
          <p>Loading...</p>
        ) : (
          <code>
            {' '}
            latitude: {latitude} <br /> longitude: {longitude} <br /> {error}{' '}
          </code>
        )}{' '}
      </div>

      <MyMap></MyMap>
    </>
  )
}
