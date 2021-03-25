import React from 'react'
import MuiDrawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded'

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
