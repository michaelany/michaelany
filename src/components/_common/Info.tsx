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
  extra: string
}

export default function Info({
  title,
  text,
  features,
  extra,
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
        <p className="Info-Extra">{extra}</p>
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
