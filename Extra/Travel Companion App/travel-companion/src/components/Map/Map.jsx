import React from 'react'
import GoogleMapReact from "google-map-react"
import useMediaQuery from '@mui/material/useMediaQuery';



export default function Map({ setCoordinates, setBounds, coordinates }) {
    const isMobile = useMediaQuery('(min-width:600px)')

    return (
        <div style={{ height: 'calc(100vh - 55px)' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD6ZojJiEbCZjfg-MZoIjPnyXzJgsfnNiM" }}
                defaultCenter={coordinates}
                defaultZoom={14}
                center={coordinates}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates = ({ lat: e.center.lat, lng: e.center.lng })
                    setBounds = ({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
            >
            </GoogleMapReact>
        </div>
    )
}
