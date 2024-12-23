import cn from 'clsx'
import {useMediaQuery} from '@mui/material'

import './Garland.scss'
import {QUERY_BREAKPOINT} from '#utils/constants'

interface IGarlandProps {
  isHeader?: boolean
}

export default function Garland({isHeader}: IGarlandProps) {
  const lg = useMediaQuery(QUERY_BREAKPOINT.lg)

  return (
    <div className={cn('Garland', isHeader && 'Garland_header')}>
      {!lg && <GarlandItem />}
      <GarlandItem />
    </div>
  )
}

const GarlandItem = () => (
  <svg
    className="Garland-Item"
    xmlns="http://www.w3.org/2000/svg"
    width={136}
    height={12}
    fill="none"
    viewBox="0 0 136 12"
  >
    <path
      className="Garland-Lamp"
      d="M11.15 5.64c-.41 1.6-1.58 2.59-2.62 2.22S7 5.9 7.4 4.32c.4-1.58 1.58-2.58 2.62-2.22 1.05.37 1.5 1.96 1.13 3.54z"
    />
    <path
      className="Garland-Lamp"
      d="M25.37 7.25c-.33 1.6-1.44 2.66-2.5 2.34-1.04-.31-1.62-1.86-1.3-3.48.32-1.6 1.44-2.66 2.49-2.35 1.05.3 1.64 1.88 1.3 3.49z"
    />
    <path
      className="Garland-Lamp"
      d="M40.4 8.31c-.13 1.64-1.17 2.82-2.27 2.62-1.1-.2-1.8-1.7-1.62-3.34.18-1.64 1.2-2.79 2.26-2.57 1.07.21 1.76 1.64 1.63 3.3z"
    />
    <path
      className="Garland-Lamp"
      d="M55.39 8.86c-.06 1.65-.99 2.93-2.08 2.85-1.1-.09-1.92-1.49-1.84-3.14.08-1.65 1.01-2.92 2.08-2.84 1.07.08 1.9 1.48 1.84 3.13z"
    />
    <path
      className="Garland-Lamp"
      d="M70.45 9.02c0 1.65-.91 2.96-2 2.94-1.1-.03-1.98-1.4-1.93-3.05.05-1.64.93-2.95 2-2.93 1.08.02 1.94 1.38 1.93 3.04z"
    />
    <path
      className="Garland-Lamp"
      d="M85.54 8.6c.05 1.65-.81 3.05-1.9 3.08-1.1.02-2-1.31-2.02-2.94-.02-1.63.84-3.01 1.9-3.05 1.07-.03 1.97 1.26 2.02 2.91z"
    />
    <path
      className="Garland-Lamp"
      d="M100.46 7.33c.32 1.61-.28 3.17-1.31 3.49-1.03.31-2.23-.79-2.48-2.41-.25-1.63.32-3.14 1.35-3.43 1.02-.29 2.13.74 2.44 2.35z"
    />
    <path
      className="Garland-Lamp"
      d="M115.33 5.97c.36 1.6-.19 3.18-1.23 3.52s-2.17-.65-2.53-2.27c-.36-1.62.19-3.18 1.22-3.52 1.04-.35 2.16.66 2.54 2.27z"
    />
    <path
      className="Garland-Lamp"
      d="M130.1 4.08c.43 1.59-.06 3.18-1.09 3.57-1.02.38-2.2-.6-2.62-2.18-.42-1.58.07-3.18 1.1-3.57 1.03-.39 2.2.59 2.62 2.18z"
    />
    <path
      className="Garland-Base"
      d="M.33.33a432.52 432.52 0 00135.34 0"
      strokeWidth=".75"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
)
