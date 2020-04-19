import React from 'react'
import {Link} from 'react-router-dom'

import './Logo.scss'
import {PATHS} from '../../utils/constants'

export default function Logo(): JSX.Element {
  return (
    <Link className="Logo" to={PATHS.HOME}>
      MA
    </Link>
  )
}
