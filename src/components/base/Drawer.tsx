import React from 'react'
import {Drawer as MuiDrawer, IconButton} from '@material-ui/core'
import {ArrowBackRounded as ArrowBackIcon} from '@material-ui/icons'

import './Drawer.scss'
import {Navigation} from '../common'

interface DrawerProps {
  open: boolean
  onClose: () => void
}

export default function Drawer({open, onClose}: DrawerProps): JSX.Element {
  return (
    <MuiDrawer className="Drawer" open={open} onClose={onClose}>
      <div className="Drawer-Content">
        <div className="Drawer-Block">
          <IconButton
            className="Colorful"
            aria-label="Скрыть"
            onClick={onClose}
          >
            <ArrowBackIcon className="ButtonIcon" />
          </IconButton>
        </div>
        <Navigation onClose={onClose} />
      </div>
    </MuiDrawer>
  )
}
