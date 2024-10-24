"use client"
import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'

function AddressMap() {
    const MarkerIcon = new L.Icon({
        iconUrl: '/images/location.svg',
        iconSize: [32, 32]
    })
      
    return (
      <MapContainer center={[48.712600, 2.168945]} zoom={20} style={{height: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker key='map marker' icon={MarkerIcon} position={[48.712600, 2.168945]} />
      </MapContainer>
    );
};

export default AddressMap