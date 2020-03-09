import React, {memo} from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.scss'
import Navigation from './Navigation'
import {Route} from '../../utils/enums'

function Sidebar() {
  return (
    <aside className="Sidebar">
      <Link className="Sidebar-Logo" to={Route.HOME}>
        MA
      </Link>
      <Navigation />
    </aside>
  )
}

export default memo(Sidebar)
