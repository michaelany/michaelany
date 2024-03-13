import {memo} from 'react'

import './Sidebar.scss'
import {Logo, Navigation} from '#components/common'
import Settings from './Settings'

const Sidebar = memo(() => (
  <aside className="Sidebar">
    <div>
      <Logo />
      <Navigation />
    </div>
    <Settings />
  </aside>
))

export default Sidebar
