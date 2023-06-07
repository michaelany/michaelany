import './Sidebar.scss'
import {Logo, Navigation} from '@components/common'
import Settings from './Settings'

export default function Sidebar() {
  return (
    <aside className="Sidebar">
      <div>
        <Logo />
        <Navigation />
      </div>
      <Settings />
    </aside>
  )
}
