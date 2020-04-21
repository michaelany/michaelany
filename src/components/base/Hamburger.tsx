import React from 'react'
import cn from 'classnames'
import IconButton from '@material-ui/core/IconButton'

import './Hamburger.scss'

interface HamburgerProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

export default function Hamburger({
  open,
  onOpen,
  onClose,
}: HamburgerProps): JSX.Element {
  return (
    <IconButton
      className={cn('Hamburger', {Hamburger_active: open})}
      aria-label="Открыть меню"
      onClick={open ? onClose : onOpen}
    >
      <div className="Hamburger-Content">
        <span className="Hamburger-Box">
          <span className="Hamburger-Inner"></span>
        </span>
      </div>
    </IconButton>
  )
}
