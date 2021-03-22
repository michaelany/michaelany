import React, {useState, memo} from 'react'
import cn from 'clsx'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Info.scss'
import Features from './Features'
import Animate, {EFFECT} from './Animate'
import {scrollToView} from '../../utils/helpers'
import {ROOT} from '../../utils/constants'
import {Feature} from '../../utils/types'

interface InfoProps {
  type: string
  title: string
  text: string
  features: Feature[]
}

function Info({type, title, text, features}: InfoProps): JSX.Element {
  const storageProp: string = `${type}Extra`
  const [open, toggleOpen] = useState<boolean>(
    localStorage[storageProp] ? JSON.parse(localStorage[storageProp]) : false
  )

  const handleToggle = (): void => {
    const value = !open
    localStorage.setItem(storageProp, JSON.stringify(value))
    toggleOpen(value)
    if (open) return
    scrollToView(ROOT)
  }

  return (
    <section className="Info Section">
      <h1 className="Title">{title}</h1>
      <p className="MainText">{text}</p>
      <Features extra={open} items={features} />
      <Animate className="Actions Actions_center" effect={EFFECT.bottom}>
        <Button
          className="Button"
          endIcon={
            <ExpandMoreIcon
              className={cn(
                'Info-DropdownIcon',
                open && 'Info-DropdownIcon_open'
              )}
            />
          }
          onClick={handleToggle}
        >
          Подробнее
        </Button>
      </Animate>
    </section>
  )
}

export default memo(Info)
