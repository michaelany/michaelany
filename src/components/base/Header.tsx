import {useState, useRef, memo} from 'react'
import {useScrollTrigger, Slide, IconButton} from '@mui/material'
import {MenuRounded as MenuIcon} from '@mui/icons-material'

import './Header.scss'
import {Logo} from '#components/common'
import Drawer from './Drawer'
import Garland from './Garland'
import {IS_NEW_YEAR_MODE} from '#utils/constants'

const Header = memo(() => {
  const [open, setOpen] = useState<boolean>(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const trigger = useScrollTrigger()

  const handleOpen = () => {
    const {activeElement} = document
    if (activeElement instanceof HTMLElement) activeElement.blur()
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const handleDrawerExited = () =>
    menuButtonRef.current?.focus({preventScroll: true})

  return (
    <>
      <Slide appear={false} in={!trigger}>
        <header className="Header">
          {IS_NEW_YEAR_MODE && <Garland isHeader />}
          <div className="Header-Content">
            <IconButton
              ref={menuButtonRef}
              className="Header-Menu Colorful"
              aria-label="Show"
              onClick={handleOpen}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
            <Logo />
          </div>
        </header>
      </Slide>
      <Drawer open={open} onClose={handleClose} onExited={handleDrawerExited} />
    </>
  )
})

export default Header
