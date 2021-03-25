import React, {useState} from 'react'
import {useScrollTrigger, Slide, IconButton} from '@material-ui/core'
import {MenuRounded as MenuIcon} from '@material-ui/icons'

import './Header.scss'
import {Logo} from '../common'
import Drawer from './Drawer'

export default function Header(): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(false)
  const trigger: boolean = useScrollTrigger()

  const handleOpen = (): void => toggleOpen(true)

  const handleClose = (): void => toggleOpen(false)

  return (
    <>
      <Slide appear={false} in={!trigger}>
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
      </Slide>
      <Drawer open={open} onClose={handleClose} />
    </>
  )
}
