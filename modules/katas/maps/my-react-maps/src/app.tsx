import React from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { usePosition } from './customhooks/usePosition'
import MyMap from './components/mymap/mymap'
import LatLngInfo from './components/latlnginfo/latlnginfo'
import LocationSelect from './components/locationselect/locationselect'
import { LatLngTuple } from 'leaflet'

const cx = bind(styles)

export function App() {
  const { latitude, longitude } = usePosition()

  const currentLatLng: LatLngTuple = [latitude, longitude]
  const zoom: number = 16
  return (
    <>
      <LatLngInfo></LatLngInfo>
      <LocationSelect></LocationSelect>
      <MyMap customName="Paco"></MyMap>
    </>
  )
}
