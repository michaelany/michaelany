import React, {useState} from 'react'
import cn from 'clsx'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Info.scss'
import TypistTitle from '../common/TypistTitle'
import Features from './Features'
import Animate, {EFFECT} from './Animate'
import {ROOT} from '../../utils/constants'
import {Feature} from '../../utils/types'

interface InfoProps {
  type: string
  title: string
  text: string
  features: Feature[]
}

export default function Info({
  type,
  title,
  text,
  features,
}: InfoProps): JSX.Element {
  const storageProp: string = `${type}Extra`
  const [open, toggleOpen] = useState<boolean>(
    localStorage[storageProp] ? JSON.parse(localStorage[storageProp]) : false
  )

  const handleToggle = (): void => {
    const value = !open
    localStorage.setItem(storageProp, JSON.stringify(value))
    toggleOpen(value)
    if (open) return
    scrollIntoView(ROOT, {
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="Info Section">
      <TypistTitle title={title} />
      <p className="MainText">{text}</p>
      <Features extra={open} items={features} />
      <Animate className="Actions Actions_center" effect={EFFECT.bottom}>
        <Button
          className="Button"
          variant={open ? 'outlined' : 'contained'}
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
