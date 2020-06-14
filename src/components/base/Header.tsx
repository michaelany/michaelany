import React, {useState} from 'react'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/MenuRounded'

import './Header.scss'
import Logo from '../common/Logo'
import Drawer from './Drawer'

export default function Header(): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(false)

  const handleOpen = (): void => toggleOpen(true)

  const handleClose = (): void => toggleOpen(false)

  return (
    <>
      <header className="Header">
        <IconButton
          className="Colorful"
          aria-label="Показать"
          onClick={handleOpen}
        >
          <MenuIcon className="ButtonIcon" />
        </IconButton>
        <Logo />
      </header>
      <Drawer open={open} onClose={handleClose} />
    </>
  )
}
