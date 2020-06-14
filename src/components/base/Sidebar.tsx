import React from 'react'

import './Sidebar.scss'
import Logo from '../common/Logo'
import Navigation from '../common/Navigation'

export default function Sidebar(): JSX.Element {
  return (
    <aside className="Sidebar">
      <Logo />
      <Navigation />
    </aside>
  )
}
