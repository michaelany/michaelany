import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import cn from 'clsx'
import {useMediaQuery} from '@mui/material'

import './App.scss'
import Sidebar from './base/Sidebar'
import Header from './base/Header'
// import Message from './base/Message'
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Project from './portfolio/Project'
import Vlog from './vlog/Vlog'
import Contact from './contact/Contact'
import {ROUTE, PATH_COLOR, QUERY_BREAKPOINT} from '@utils/constants'

export default function App() {
  const {pathname} = useLocation()
  const isMd = useMediaQuery(QUERY_BREAKPOINT.md)

  const lastSlashIndex = pathname.lastIndexOf('/')
  const AppClassName = cn(
    `App App_page_${
      pathname.slice(1, lastSlashIndex || undefined) || 'home'
    } App_color_${PATH_COLOR[pathname.slice(lastSlashIndex)]}`,
    pathname === ROUTE.portfolio
      ? 'App_background_blue'
      : pathname === ROUTE.vlog
        ? 'App_background_red'
        : pathname === ROUTE.contact
          ? 'App_background_green'
          : undefined
  )

  return (
    <div className={AppClassName}>
      {isMd ? <Header /> : <Sidebar />}
      <main className="App-Main">
        <Routes>
          <Route path={ROUTE.home} element={<Home />} />
          <Route path={ROUTE.about} element={<About />} />
          <Route path={ROUTE.skills} element={<Skills />} />
          <Route path={ROUTE.experience} element={<Experience />} />
          <Route path={ROUTE.portfolio}>
            <Route index element={<Portfolio />} />
            <Route path=":project" element={<Project />} />
          </Route>
          <Route path={ROUTE.vlog} element={<Vlog />} />
          <Route path={ROUTE.contact} element={<Contact />} />
          <Route path="*" element={<Navigate replace to={ROUTE.home} />} />
        </Routes>
      </main>
    </div>
  )
}
