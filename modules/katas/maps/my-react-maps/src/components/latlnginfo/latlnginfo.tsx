import React from 'react'
import { usePosition } from '../../customhooks/usePosition'
import styles from './latlanginfo.module.css'
import { bind } from '../../bind'
const cx = bind(styles)

export default function LatLngInfo() {
  const { latitude, longitude, error, isLoading } = usePosition()
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }
  return (
    <div className={cx('latlngdata')}>
      <code>
        latitude: {latitude} <br /> longitude: {longitude}
      </code>
    </div>
  )
}
