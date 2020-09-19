import React from 'react'
import {Link} from 'react-router-dom'
import CopyrightIcon from '@material-ui/icons/CopyrightRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import FavoriteIcon from '@material-ui/icons/FavoriteRounded'

import './Copyright.scss'
import {PATHS, TODAY} from '../../utils/constants'

const year: number = TODAY.getFullYear()

export default function Copyright() {
  return (
    <p className="Copyright">
      <CopyrightIcon className="Copyright-Icon" /> <time>{year}</time>,{' '}
      <BuildIcon className="Copyright-Icon" /> by{' '}
      <Link className="Copyright-Link" to={PATHS.home}>
        Michael Ananiev
      </Link>{' '}
      with <FavoriteIcon className="Copyright-Icon" />
    </p>
  )
}
