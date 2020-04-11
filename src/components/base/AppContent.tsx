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
import {PATHS} from '../../utils/data'

export default function AppContent(): JSX.Element {
  const {pathname} = useLocation()
  return (
    <div className={`AppContent AppContent_${pathname.slice(1) || 'home'}`}>
      <Sidebar />
      <main className="AppContent-Main">
        <Switch>
          <Route exact path={PATHS.HOME} component={Home} />
          <Route exact path={PATHS.ABOUT} component={About} />
          <Route exact path={PATHS.SKILLS} component={Skills} />
          <Route exact path={PATHS.EXPERIENCE} component={Experience} />
          <Route exact path={PATHS.PORTFOLIO} component={Portfolio} />
          <Route exact path={PATHS.CONTACT} component={Contact} />
          <Redirect to={PATHS.HOME} />
        </Switch>
      </main>
    </div>
  )
}
