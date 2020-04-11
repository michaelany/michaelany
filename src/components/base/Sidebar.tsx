import React, {memo} from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.scss'
import Navigation from './Navigation'
import {PATHS} from '../../utils/data'

function Sidebar(): JSX.Element {
  return (
    <aside className="Sidebar">
      <Link className="Sidebar-Logo" to={PATHS.HOME}>
        MA
      </Link>
      <Navigation />
    </aside>
  )
}

export default memo(Sidebar)
