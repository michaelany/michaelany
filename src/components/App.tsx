import {lazy, Suspense, useEffect} from 'react'
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import cn from 'clsx'
import {useMediaQuery} from '@mui/material'

import './App.scss'
import Sidebar from './base/Sidebar'
import Header from './base/Header'
import Message from './base/Message'
import Garland from './base/Garland'
import {
  ROUTE,
  PATH_COLOR,
  PATH_BACKGROUND_COLOR,
  QUERY_BREAKPOINT,
  IS_NEW_YEAR_MODE,
} from '#utils/constants'
import {handleAppLoaded} from '#utils/base'

const Home = lazy(() => import('./home/Home'))
const About = lazy(() => import('./about/About'))
const Skills = lazy(() => import('./skills/Skills'))
const Experience = lazy(() => import('./experience/Experience'))
const Portfolio = lazy(() => import('./portfolio/Portfolio'))
const Project = lazy(() => import('./portfolio/Project'))
const Vlog = lazy(() => import('./vlog/Vlog'))
const Video = lazy(() => import('./vlog/Video'))
const Contact = lazy(() => import('./contact/Contact'))

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
          <Suspense fallback={<Fallback />}>
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
            <LazyRouteLoaded />
          </Suspense>
        </main>
      </div>
      {IS_NEW_YEAR_MODE && <Message />}
    </>
  )
}

const Fallback = () => <div>Loading...</div>

const LazyRouteLoaded = () => {
  useEffect(() => {
    handleAppLoaded()
  }, [])

  return null
}
