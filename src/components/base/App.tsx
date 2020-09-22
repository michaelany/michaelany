import React from 'react'
import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import cn from 'clsx'
import Hidden from '@material-ui/core/Hidden'

import './App.scss'
import Sidebar from './Sidebar'
import Header from './Header'
import Home from '../home/Home'
import About from '../about/About'
import Skills from '../skills/Skills'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Project from '../portfolio/Project'
import Contact from '../contact/Contact'
import {PATHS, PATH_COLORS} from '../../utils/constants'

export default function App(): JSX.Element {
  const {pathname} = useLocation()
  const lastSlashIndex: number = pathname.lastIndexOf('/')
  const AppClassName: string = cn(
    `App App_page_${
      pathname.slice(1, lastSlashIndex || undefined) || 'home'
    } App_color_${PATH_COLORS[pathname.slice(lastSlashIndex)]}`,
    pathname === PATHS.portfolio && 'App_background_blue',
    pathname === PATHS.contact && 'App_background_green'
  )

  return (
    <div className={AppClassName}>
      <Hidden mdDown>
        <Sidebar />
      </Hidden>
      <Hidden lgUp>
        <Header />
      </Hidden>
      <main className="App-Main">
        <Switch>
          <Route exact path={PATHS.home} component={Home} />
          <Route exact path={PATHS.about} component={About} />
          <Route exact path={PATHS.skills} component={Skills} />
          <Route exact path={PATHS.experience} component={Experience} />
          <Route exact path={PATHS.portfolio} component={Portfolio} />
          <Route
            exact
            path={`${PATHS.portfolio}/:project`}
            component={Project}
          />
          <Route exact path={PATHS.contact} component={Contact} />
          <Redirect to={PATHS.home} />
        </Switch>
      </main>
    </div>
  )
}
