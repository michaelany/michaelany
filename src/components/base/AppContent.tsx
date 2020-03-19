import React from 'react'
import {Switch, Route as RouteComponent, Redirect, useLocation} from 'react-router-dom'

import './AppContent.scss'
import Sidebar from './Sidebar'
import Home from '../home/Home'
import About from '../about/About'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import {Route} from '../../utils/enums'

export default function AppContent(): JSX.Element {
  const {pathname} = useLocation()
  return (
    <div className={`AppContent AppContent_${pathname.slice(1) || 'home'}`}>
      <Sidebar />
      <main className="AppContent-Main">
        <Switch>
          <RouteComponent exact path={Route.HOME} component={Home} />
          <RouteComponent exact path={Route.ABOUT} component={About} />
          <RouteComponent exact path={Route.SKILLS} component={Skills} />
          <RouteComponent exact path={Route.EXPERIENCE} component={Experience} />
          <RouteComponent exact path={Route.PORTFOLIO} component={Portfolio} />
          <RouteComponent exact path={Route.CONTACT} component={Contact} />
          <Redirect to={Route.HOME} />
        </Switch>
      </main>
    </div>
  )
}
