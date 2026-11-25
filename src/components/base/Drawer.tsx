import {useEffect, useRef} from 'react'
import {Drawer as MuiDrawer, IconButton} from '@mui/material'
import {ArrowBackRounded as ArrowBackIcon} from '@mui/icons-material'

import './Drawer.scss'
import {Navigation} from '#components/common'
import Settings from './Settings'

interface IDrawerProps {
  open: boolean
  onClose: () => void
  onExited: () => void
}

export default function Drawer({open, onClose, onExited}: IDrawerProps) {
  const paperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // focus the drawer after mui updates aria-hidden on its siblings
    if (open) paperRef.current?.focus({preventScroll: true})
  }, [open])

  const handleClose = () => {
    const {activeElement} = document
    if (
      activeElement instanceof HTMLElement &&
      paperRef.current?.contains(activeElement)
    )
      activeElement.blur()
    onClose()
  }

  return (
    <MuiDrawer
      disableAutoFocus
      disableRestoreFocus
      open={open}
      slotProps={{paper: {ref: paperRef}, transition: {onExited}}}
      onClose={handleClose}
    >
      <div className="Drawer-Content">
        <div>
          <div className="Drawer-Block">
            <IconButton
              className="Colorful"
              aria-label="Hide"
              onClick={handleClose}
            >
              <ArrowBackIcon className="ButtonIcon" />
            </IconButton>
          </div>
          <Navigation onClose={handleClose} />
        </div>
        <Settings />
      </div>
    </MuiDrawer>
  )
}
