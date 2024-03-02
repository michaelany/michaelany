import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Map as GoogleMap, Marker, GoogleApiWrapper} from 'google-maps-react'
import {CircularProgress} from '@mui/material'

import './Map.scss'
import markerIcon from '@assets/icons/marker.svg'
import {ROUTE} from '@utils/constants'
import STYLES from '@styles/map'

function Map() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()

  const handleMarkerClick = () => {
    navigate(ROUTE.about)
  }

  return (
    <div className="Map">
      {/* @ts-ignore */}
      <GoogleMap
        disableDefaultUI
        /* @ts-ignore */
        google={window.google}
        initialCenter={initialCenter}
        zoom={11}
        styles={STYLES}
      >
        <Marker
          key={i18n.language}
          /* @ts-ignore */
          title={`${t('contact.marker')} 🏠`}
          icon={markerIcon}
          onClick={handleMarkerClick}
        />
      </GoogleMap>
    </div>
  )
}

const LoadingContainer = () => (
  <div className="Map Map_loading">
    <CircularProgress />
  </div>
)

export default GoogleApiWrapper({
  LoadingContainer,
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
})(Map)

const initialCenter = {
  lat: -36.79112718004715,
  lng: 174.66694252383772,
}
