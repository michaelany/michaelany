import {Link} from 'react-router-dom'
import {
  CopyrightRounded as CopyrightIcon,
  BuildRounded as BuildIcon,
  FavoriteRounded as FavoriteIcon,
} from '@material-ui/icons'

import './Copyright.scss'
import {ROUTE, TODAY} from '../../utils/constants'

const year: number = TODAY.getFullYear()

export default function Copyright() {
  return (
    <p className="Copyright">
      <CopyrightIcon className="Copyright-Icon" /> <time>{year}</time>,{' '}
      <BuildIcon className="Copyright-Icon" /> by{' '}
      <Link className="Copyright-Link" to={ROUTE.home}>
        Michael Any
      </Link>{' '}
      with <FavoriteIcon className="Copyright-Icon" />
    </p>
  )
}
