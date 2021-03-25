import React from 'react'
import {useHistory} from 'react-router-dom'
import {Map as GoogleMap, Marker, GoogleApiWrapper} from 'google-maps-react'
import {CircularProgress} from '@material-ui/core'

import './Map.scss'
import markerIcon from '../../assets/icons/marker.svg'
import {ROUTE} from '../../utils/constants'
import mapTheme from '../../styles/map'

interface InitialCenter {
  lat: number
  lng: number
}

const initialCenter: InitialCenter = {
  lat: 55.819456,
  lng: 37.802932,
}

const LoadingContainer = (): JSX.Element => (
  <div className="Map Map_loading">
    <CircularProgress />
  </div>
)

function Map(): JSX.Element {
  const history = useHistory()

  const handleMarkerClick = (): void => {
    history.push(ROUTE.about)
  }

  return (
    <div className="Map">
      <GoogleMap
        disableDefaultUI
        google={window.google}
        initialCenter={initialCenter}
        zoom={10}
        styles={mapTheme as any}
      >
        <Marker icon={markerIcon} onClick={handleMarkerClick} />
      </GoogleMap>
    </div>
  )
}

export default GoogleApiWrapper({
  LoadingContainer,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
})(Map)
