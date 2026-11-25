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
  IS_NEW_YEAR_MODE,
} from '#utils/constants'
import {handleAppLoaded} from '#utils/base'
import {SIDEBAR_WIDTH, toRem} from '#styles/tokens'

const Home = lazy(() => import('./home/Home'))
const About = lazy(() => import('./about/About'))
const Skills = lazy(() => import('./skills/Skills'))
const Experience = lazy(() => import('./experience/Experience'))
const Portfolio = lazy(() => import('./portfolio/Portfolio'))
const Project = lazy(() => import('./portfolio/Project'))
const Blog = lazy(() => import('./blog/Blog'))
const Video = lazy(() => import('./blog/Video'))
const Contact = lazy(() => import('./contact/Contact'))

const stackedLayoutQuery = `(width < calc(56rem + ${toRem(SIDEBAR_WIDTH)}))`

export default function App() {
  const {pathname} = useLocation()
  const isStacked = useMediaQuery(stackedLayoutQuery)

  const path = getPagePath(pathname)
  const color = PATH_COLOR[path] ?? 'white'
  const backgroundColor = PATH_BACKGROUND_COLOR[path]
  const appClassName = cn(
    'App',
    isStacked && 'App_stacked',
    `App_color_${color}`,
    color !== 'white' && color !== 'alternate' && 'App_color_accent',
    backgroundColor && `App_hasBackground App_background_${backgroundColor}`
  )

  return (
    <>
      <div className={appClassName}>
        {isStacked ? <Header /> : <Sidebar />}
        <main className="App-Main">
          {IS_NEW_YEAR_MODE && !isStacked && <Garland />}
          <Suspense>
            <Routes>
              <Route
                path={ROUTE.home}
                element={<Home isStacked={isStacked} />}
              />
              <Route path={ROUTE.about} element={<About />} />
              <Route path={ROUTE.skills} element={<Skills />} />
              <Route path={ROUTE.experience} element={<Experience />} />
              <Route path={ROUTE.portfolio}>
                <Route index element={<Portfolio />} />
                <Route path=":project" element={<Project />} />
              </Route>
              <Route path={ROUTE.blog}>
                <Route index element={<Blog />} />
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

const LazyRouteLoaded = () => {
  useEffect(() => {
    handleAppLoaded()
  }, [])

  return null
}

const getPagePath = (pathname: string) => {
  let path = pathname
  try {
    path = decodeURI(pathname)
  } catch {
    // keep the original path
  }
  return (
    path
      .replace(/^\/[^/]+/, section => section.toLowerCase())
      .replace(/\/+$/, '') || ROUTE.home
  )
}
