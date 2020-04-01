import React from 'react'
import {Switch, Route, Redirect, useLocation} from 'react-router-dom'

import './AppContent.scss'
import Sidebar from './Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import {Path} from '../../utils/enums'

export default function AppContent(): JSX.Element {
  const {pathname} = useLocation()
  return (
    <div className={`AppContent AppContent_${pathname.slice(1) || 'home'}`}>
      <Sidebar />
      <main className="AppContent-Main">
        <Switch>
          <Route exact path={Path.HOME} component={Home} />
          <Route exact path={Path.ABOUT} component={About} />
          <Route exact path={Path.SKILLS} component={Skills} />
          <Route exact path={Path.EXPERIENCE} component={Experience} />
          <Route exact path={Path.PORTFOLIO} component={Portfolio} />
          <Route exact path={Path.CONTACT} component={Contact} />
          <Redirect to={Path.HOME} />
        </Switch>
      </main>
    </div>
  )
}
