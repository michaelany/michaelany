import React, {useState, useCallback} from 'react'
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
  const [isOpen, toggleOpen] = useState<boolean>(false)

  const handleIsOpenToggle = useCallback((): void => {
    toggleOpen(isOpen => !isOpen)
  }, [])

  return (
    <section className="Info Section">
      <h1 className={`Title Title_color_${color}`}>{title}</h1>
      <p className="MainText">
        <b>{text}</b>
      </p>
      <Features items={features} />
      <Collapse unmountOnExit in={isOpen} timeout={Duration.LONGER}>
        <div className="Info-Extra">{extraContent}</div>
      </Collapse>
      <div className="Actions Actions_center">
        <Button
          className={`Button Button_color_${color}`}
          variant={isOpen ? 'outlined' : 'contained'}
          endIcon={
            <ExpandMoreIcon
              className={cn('Info-DropdownIcon', {
                'Info-DropdownIcon_open': isOpen,
              })}
            />
          }
          onClick={handleIsOpenToggle}
        >
          Подробнее
        </Button>
      </div>
    </section>
  )
}
