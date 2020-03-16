import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import styles from './mymap.module.css'
import { usePosition } from '../../customhooks/usePosition'

import { bind } from '../../bind'
const cx = bind(styles)

interface Props {
  customName: String
  postion?: LatLngTuple
}

const MyMap: React.FC<Props> = ({ customName }) => {
  //Llamadas a customHook siempre dentro de un React.Component
  const { latitude, longitude } = usePosition()

  const currentLatLng: LatLngTuple = [latitude, longitude]
  const zoom: number = 16
  return (
    <>
      {customName}
      <Map className={cx('my-map')} center={currentLatLng} zoom={zoom}>
        zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        <Marker position={currentLatLng}></Marker>
      </Map>
    </>
  )
}

export default MyMap
