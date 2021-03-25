import React from 'react'

import './Sidebar.scss'
import {Logo, Navigation} from '../common'

export default function Sidebar(): JSX.Element {
  return (
    <aside className="Sidebar">
      <Logo />
      <Navigation />
    </aside>
  )
}
