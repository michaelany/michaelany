import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import cn from 'clsx'
import {useMediaQuery} from '@mui/material'

import './App.scss'
import Sidebar from './base/Sidebar'
import Header from './base/Header'
import Message from './base/Message'
import Garland from './base/Garland'
import Home from './home/Home'
import About from './about/About'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import Portfolio from './portfolio/Portfolio'
import Project from './portfolio/Project'
import Vlog from './vlog/Vlog'
import Video from './vlog/Video'
import Contact from './contact/Contact'
import {
  ROUTE,
  PATH_COLOR,
  PATH_BACKGROUND_COLOR,
  QUERY_BREAKPOINT,
  IS_NEW_YEAR_MODE,
} from '#utils/constants'

export default function App() {
  const {pathname} = useLocation()
  const md = useMediaQuery(QUERY_BREAKPOINT.md)

  const lastSlashIndex = pathname.lastIndexOf('/')
  const pathnameEnd = pathname.slice(lastSlashIndex)

  const AppClassName = cn(
    `App App_page_${
      pathname.slice(1, lastSlashIndex || undefined) || 'home'
    } App_color_${PATH_COLOR[pathnameEnd] ?? 'white'}`,
    PATH_BACKGROUND_COLOR[pathnameEnd] &&
      `App_background_${PATH_BACKGROUND_COLOR[pathnameEnd]}`
  )

  return (
    <>
      <div className={AppClassName}>
        {md ? <Header /> : <Sidebar />}
        <main className="App-Main">
          {IS_NEW_YEAR_MODE && !md && <Garland />}
          <Routes>
            <Route path={ROUTE.home} element={<Home />} />
            <Route path={ROUTE.about} element={<About />} />
            <Route path={ROUTE.skills} element={<Skills />} />
            <Route path={ROUTE.experience} element={<Experience />} />
            <Route path={ROUTE.portfolio}>
              <Route index element={<Portfolio />} />
              <Route path=":project" element={<Project />} />
            </Route>
            <Route path={ROUTE.vlog}>
              <Route index element={<Vlog />} />
              <Route path=":video" element={<Video />} />
            </Route>
            <Route path={ROUTE.contact} element={<Contact />} />
            <Route path="*" element={<Navigate replace to={ROUTE.home} />} />
          </Routes>
        </main>
      </div>
      {IS_NEW_YEAR_MODE && <Message />}
    </>
  )
}
