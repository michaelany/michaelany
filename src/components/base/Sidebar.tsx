import React from 'react'
import {Link} from 'react-router-dom'

import './Sidebar.scss'
import Navigation from './Navigation'
import {Route} from '../../utils/enums'

export default function Sidebar() {
  return (
    <aside className="Sidebar">
      <Link className="Sidebar-Logo" to={Route.HOME}>
        MA
      </Link>
      <Navigation />
    </aside>
  )
}
