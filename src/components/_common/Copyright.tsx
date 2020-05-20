import React from 'react'
import {Link} from 'react-router-dom'
import CopyrightIcon from '@material-ui/icons/CopyrightRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import FavoriteIcon from '@material-ui/icons/FavoriteRounded'

import './Copyright.scss'
import {PATHS} from '../../utils/constants'

const year: number = new Date().getFullYear()

export default function Copyright() {
  return (
    <p className="Copyright">
      <CopyrightIcon className="Copyright-Icon" />
      {year},<BuildIcon className="Copyright-Icon" />+
      <FavoriteIcon className="Copyright-Icon" />
      by{' '}
      <Link className="Copyright-Link" to={PATHS.HOME}>
        Michael Ananiev
      </Link>
    </p>
  )
}
