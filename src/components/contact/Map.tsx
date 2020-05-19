import React from 'react'
import {useHistory} from 'react-router-dom'
import {Map as GoogleMap, Marker, GoogleApiWrapper} from 'google-maps-react'
import CircularProgress from '@material-ui/core/CircularProgress'

import markerIcon from '../../assets/icons/marker.svg'
import {PATHS} from '../../utils/constants'
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
  <div>
    <CircularProgress />
  </div>
)

function Map(): JSX.Element {
  const history = useHistory()

  const handleMarkerClick = (): void => {
    history.push(PATHS.ABOUT)
  }

  return (
    <GoogleMap
      disableDefaultUI
      google={window.google}
      initialCenter={initialCenter}
      zoom={10}
      styles={mapTheme as any}
    >
      <Marker icon={markerIcon} onClick={handleMarkerClick} />
    </GoogleMap>
  )
}

export default GoogleApiWrapper({
  LoadingContainer,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
})(Map)