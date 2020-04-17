import React, {useState} from 'react'
import cn from 'classnames'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Info.scss'
import Features from './Features'
import {Feature} from '../../utils/types'
import {DURATIONS} from '../../styles/theme'

interface InfoProps {
  title: string
  text: string
  features: Feature[]
  extraContent: string | JSX.Element
}

export default function Info({
  title,
  text,
  features,
  extraContent,
}: InfoProps): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(false)

  const handleToggle = (): void => toggleOpen(!open)

  return (
    <section className="Info Section">
      <h1 className="Title">{title}</h1>
      <p className="MainText">
        <b>{text}</b>
      </p>
      <Features items={features} />
      <Collapse unmountOnExit in={open} timeout={DURATIONS.LONGER}>
        <div className="Info-Extra">{extraContent}</div>
      </Collapse>
      <div className="Actions Actions_center">
        <Button
          className="Button"
          variant={open ? 'outlined' : 'contained'}
          endIcon={
            <ExpandMoreIcon
              className={cn('Info-DropdownIcon', {
                'Info-DropdownIcon_open': open,
              })}
            />
          }
          onClick={handleToggle}
        >
          Подробнее
        </Button>
      </div>
    </section>
  )
}
