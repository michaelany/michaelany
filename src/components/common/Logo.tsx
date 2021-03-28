import {Link} from 'react-router-dom'

import './Logo.scss'
import {ROUTE} from '../../utils/constants'

export default function Logo(): JSX.Element {
  return (
    <Link className="Logo Colorful" to={ROUTE.home}>
      MA
    </Link>
  )
}
