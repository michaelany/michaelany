import React, {useState} from 'react'
import cn from 'classnames'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded'

import './Info.scss'
import Features from './Features'
import {Title} from '../../utils/enums'
import {Color, IFeature} from '../../utils/types'
import {Duration} from '../../styles/theme'

interface IInfoProps {
  color: Color
  title: Title
  text: string
  features: IFeature[]
  extraContent: string | JSX.Element
}

export default function Info({
  color,
  title,
  text,
  features,
  extraContent,
}: IInfoProps): JSX.Element {
  const [open, toggleOpen] = useState<boolean>(false)

  const handleToggle = (): void => toggleOpen(!open)

  return (
    <section className="Info Section">
      <h1 className={`Title Title_color_${color}`}>{title}</h1>
      <p className="MainText">
        <b>{text}</b>
      </p>
      <Features items={features} />
      <Collapse unmountOnExit in={open} timeout={Duration.LONGER}>
        <div className="Info-Extra">{extraContent}</div>
      </Collapse>
      <div className="Actions Actions_center">
        <Button
          className={`Button Button_color_${color}`}
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
