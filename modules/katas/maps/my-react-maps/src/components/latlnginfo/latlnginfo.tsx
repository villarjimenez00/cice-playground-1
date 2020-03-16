import React from 'react'
import { usePosition } from '../../customhooks/usePosition'
import styles from './latlanginfo.module.css'
import { bind } from '../../bind'
const cx = bind(styles)

export default function LatLngInfo() {
  const { latitude, longitude, error } = usePosition()
  return (
    <div className={cx('latlngdata')}>
      {latitude === 0 && longitude === 0 ? (
        <p>Loading...</p>
      ) : (
        <code>
          {' '}
          latitude: {latitude} <br /> longitude: {longitude} <br /> {error}{' '}
        </code>
      )}{' '}
    </div>
  )
}
