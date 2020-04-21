import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'

import './Header.scss'
import Logo from '../_common/Logo'
import Navigation from '../_common/Navigation'
import Hamburger from './Hamburger'

export default function Header(): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(false)

  const handleOpen = (): void => toggleOpen(true)

  const handleClose = (): void => toggleOpen(false)

  return (
    <header className="Header">
      <Hamburger open={open} onOpen={handleOpen} onClose={handleClose} />
      <Logo />
      <Drawer
        keepMounted
        disablePortal
        open={open}
        elevation={0}
        onClose={handleClose}
      >
        <div className="Header-Drawer">
          <Navigation onClose={handleClose} />
        </div>
      </Drawer>
    </header>
  )
}
