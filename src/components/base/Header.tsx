import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/MenuRounded'

import './Header.scss'
import Logo from '../_common/Logo'
import Navigation from '../_common/Navigation'

export default function Header(): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(false)

  const handleOpen = (): void => toggleOpen(true)

  const handleClose = (): void => toggleOpen(false)

  return (
    <header className="Header">
      <IconButton
        className="Header-Button"
        aria-label="Открыть меню"
        onClick={handleOpen}
      >
        <MenuIcon className="Header-Icon" />
      </IconButton>
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
