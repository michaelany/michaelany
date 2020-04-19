import React from 'react'

import './Sidebar.scss'
import Logo from '../_common/Logo'
import Navigation from '../_common/Navigation'

export default function Sidebar(): JSX.Element {
  return (
    <aside className="Sidebar">
      <Logo />
      <Navigation />
    </aside>
  )
}
