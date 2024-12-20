import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

import './Map.scss'
import markerIcon from '#assets/icons/marker.svg'
import {ROUTE} from '#utils/constants'
import MAP_STYLES from '#styles/map'

export default function Map() {
  const {t, i18n} = useTranslation()
  const navigate = useNavigate()

  const handleMarkerClick = () => navigate(ROUTE.about)

  return (
    <div className="Map">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={11}
          options={{
            disableDefaultUI: true,
            styles: MAP_STYLES,
          }}
        >
          <Marker
            key={i18n.language}
            position={initialCenter}
            title={`${t('contact.marker')} 🏠`}
            icon={{
              url: markerIcon,
            }}
            onClick={handleMarkerClick}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

const containerStyle = {
  width: '100%',
  height: '100%',
}

const initialCenter = {
  lat: -36.792836,
  lng: 174.6605093,
}
