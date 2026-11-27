import {Link} from 'react-router-dom'

import './Logo.scss'
import LogoSvg from '#assets/images/logo.svg?react'
import {ROUTE} from '#utils/constants'

export default function Logo() {
  return (
    <Link className="Logo Colorful" to={ROUTE.home}>
      <LogoSvg className="Logo-Svg" />
    </Link>
  )
}
