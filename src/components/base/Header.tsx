import {useState} from 'react'
import {useScrollTrigger, Slide, IconButton} from '@material-ui/core'
import {MenuRounded as MenuIcon} from '@material-ui/icons'

import './Header.scss'
import {Logo} from '@components/common'
import Drawer from './Drawer'

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const trigger: boolean = useScrollTrigger()

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <Slide appear={false} in={!trigger}>
        <header className="Header">
          <IconButton
            className="Colorful"
            aria-label="Show"
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
