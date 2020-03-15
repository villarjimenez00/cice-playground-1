import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import styles from './mymap.module.css'

import { bind } from '../../bind'
const cx = bind(styles)
/**
 * Home
 * latitude: 40.3914663
 * longitude: -3.6631075,17
 */

const defaultLatLng: LatLngTuple = [40.3914663, -3.6631075]
const zoom: number = 16

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
