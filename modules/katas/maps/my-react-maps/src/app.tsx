import React, { useState, useEffect } from 'react'
import styles from './app.module.css'
import { bind } from './bind'
//import { usePosition } from './usePosition'
const cx = bind(styles)

export function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [error, setError] = useState('')

  const getLocation = () => {
    navigator.geolocation.watchPosition(
      position => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      error => setError(error.message)
    )
  }

  useEffect(() => getLocation())

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
