import React from 'react'
import {useHistory} from 'react-router-dom'
import {Map as GoogleMap, Marker, GoogleApiWrapper} from 'google-maps-react'
import CircularProgress from '@material-ui/core/CircularProgress'

import markerIcon from '../../assets/icons/marker.svg'
import {Path} from '../../utils/enums'
import mapTheme from '../../styles/map'

interface IInitialCenter {
  lat: number
  lng: number
}

const initialCenter: IInitialCenter = {
  lat: 55.7931056,
  lng: 37.8074463,
}

const LoadingContainer = (): JSX.Element => (
  <div>
    <CircularProgress />
  </div>
)

function Map(): JSX.Element {
  const history = useHistory()

  const handleMarkerClick = (): void => {
    history.push(Path.ABOUT)
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
