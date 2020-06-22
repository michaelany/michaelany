import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToTop(): null {
  const {pathname} = useLocation()

  // there's a twitching problem in safari, not critical
  useEffect((): void => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
