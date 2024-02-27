import {Drawer as MuiDrawer, IconButton} from '@mui/material'
import {ArrowBackRounded as ArrowBackIcon} from '@mui/icons-material'

import './Drawer.scss'
import {Navigation} from '@components/common'
import Settings from './Settings'

interface DrawerProps {
  open: boolean
  onClose: () => void
}

export default function Drawer({open, onClose}: DrawerProps) {
  return (
    <MuiDrawer open={open} onClose={onClose}>
      <div className="Drawer-Content">
        <div>
          <div className="Drawer-Block">
            <IconButton
              className="Colorful"
              aria-label="Hide"
              onClick={onClose}
            >
              <ArrowBackIcon className="ButtonIcon" />
            </IconButton>
          </div>
          <Navigation onClose={onClose} />
        </div>
        <Settings />
      </div>
    </MuiDrawer>
  )
}
