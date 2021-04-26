import {Link} from 'react-router-dom'

import './Logo.scss'
import {ReactComponent as LogoSvg} from '../../assets/img/logo.svg'
import {ROUTE} from '../../utils/constants'

export default function Logo(): JSX.Element {
  return (
    <Link className="Logo Colorful" to={ROUTE.home}>
      <LogoSvg className="Logo-Svg" />
    </Link>
  )
}
