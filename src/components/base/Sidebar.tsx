import './Sidebar.scss'
import {Logo, Navigation} from '../common'
import Settings from './Settings'

export default function Sidebar(): JSX.Element {
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
