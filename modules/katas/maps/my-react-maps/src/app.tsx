import React from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { usePosition } from './customhooks/usePosition'
import MyMap from './components/mymap/mymap'
import LatLngInfo from './components/latlngdata/latlnginfo'

const cx = bind(styles)

export function App() {
  return (
    <>
      <LatLngInfo></LatLngInfo>

      <MyMap></MyMap>
    </>
  )
}
