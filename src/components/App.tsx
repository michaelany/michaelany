import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import cn from 'clsx'
import {Hidden} from '@material-ui/core'

import './App.scss'
import Sidebar from './base/Sidebar'
import Header from './base/Header'
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Project from './portfolio/Project'
import Contact from './contact/Contact'
import {ROUTE, PATH_COLOR} from '../utils/constants'

export default function App(): JSX.Element {
  const {pathname} = useLocation()
  const lastSlashIndex: number = pathname.lastIndexOf('/')
  const AppClassName: string = cn(
    `App App_page_${
      pathname.slice(1, lastSlashIndex || undefined) || 'home'
    } App_color_${PATH_COLOR[pathname.slice(lastSlashIndex)]}`,
    pathname === ROUTE.portfolio && 'App_background_blue',
    pathname === ROUTE.contact && 'App_background_green'
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
          <Route exact path={ROUTE.home} component={Home} />
          <Route exact path={ROUTE.about} component={About} />
          <Route exact path={ROUTE.skills} component={Skills} />
          <Route exact path={ROUTE.experience} component={Experience} />
          <Route exact path={ROUTE.portfolio} component={Portfolio} />
          <Route
            exact
            path={`${ROUTE.portfolio}/:project`}
            component={Project}
          />
          <Route exact path={ROUTE.contact} component={Contact} />
          <Redirect to={ROUTE.home} />
        </Switch>
      </main>
    </div>
  )
}
