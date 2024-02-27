import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import cn from 'clsx'
import {Hidden} from '@mui/material'

import './App.scss'
import {ROUTE, PATH_COLOR} from '@utils/constants'
import Sidebar from './base/Sidebar'
import Header from './base/Header'
// import Message from './base/Message'
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Project from './portfolio/Project'
import Contact from './contact/Contact'

export default function App() {
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
      {/* <Message /> */}
      {/* @ts-ignore */}
      <Hidden mdDown>
        <Sidebar />
      </Hidden>
      {/* @ts-ignore */}
      <Hidden lgUp>
        <Header />
      </Hidden>
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
          <Route path={ROUTE.contact} element={<Contact />} />
          <Route path="*" element={<Navigate replace to={ROUTE.home} />} />
        </Routes>
      </main>
    </div>
  )
}
