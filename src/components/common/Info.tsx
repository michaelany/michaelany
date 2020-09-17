import React, {useState} from 'react'
import cn from 'classnames'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Info.scss'
import TypistTitle from '../common/TypistTitle'
import Features from './Features'
import Animate, {EFFECTS} from './Animate'
import {Feature} from '../../utils/types'

interface InfoProps {
  title: string
  text: string
  features: Feature[]
}

export default function Info({title, text, features}: InfoProps): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(true)

  const handleToggle = (): void => toggleOpen(!open)

  return (
    <section className="Info Section">
      <TypistTitle title={title} />
      <p className="MainText">
        <b>{text}</b>
      </p>
      <Features extra={open} items={features} />
      <Animate className="Actions Actions_center" effect={EFFECTS.bottom}>
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
      </Animate>
    </section>
  )
}
