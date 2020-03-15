import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import styles from './app.module.css'

import { bind } from './bind'
const cx = bind(styles)

const defaultLatLng: LatLngTuple = [48.865572, 2.283523]
const zoom: number = 8

const MyMap: React.FC = () => {
  return (
    <Map id="mapId" className={cx('my-map')} center={defaultLatLng} zoom={zoom}>
      zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
    </Map>
  )
}

export default MyMap
