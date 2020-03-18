import React, {memo, useState, ElementType} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Collapse from '@material-ui/core/Collapse'

import './Info.scss'
import ColorButton from '../_common/ColorButton'
import DropdownIcon from '../_common/DropdownIcon'
import {Title} from '../../utils/enums'
import {IFeature, Color} from '../../utils/types'
import {THEME} from '../../styles/theme'

interface IInfoProps {
  title: Title
  mainText: string
  textContent: string | JSX.Element
  features: IFeature[]
  extraFeatures: IFeature[]
  color: Color
}

interface IFeaturesProps {
  items: IFeature[]
}

const InfoList: ElementType = withStyles({
  root: {
    '&:last-child': {
      marginTop: 16,
    },
  },
})(Grid)

const InfoItem: ElementType = withStyles({
  root: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 16,
    '& > svg': {
      fontSize: 32,
      color: THEME.COLOR.SECOND_TEXT,
    },
  },
})(Grid)

const Features = memo(
  ({items}: IFeaturesProps): JSX.Element => (
    <InfoList container component="ul" spacing={4}>
      {items.map(({id, label, Icon}: IFeature) => (
        <InfoItem key={id} item component="li" xs={6}>
          <Icon />
          <p>{label}</p>
        </InfoItem>
      ))}
    </InfoList>
  )
)

export default function Info({title, mainText, textContent, features, extraFeatures, color}: IInfoProps): JSX.Element {
  const [isOpen, toggleOpen] = useState<boolean>(false)

  const handleIsOpenToggle = (): void => {
    toggleOpen(isOpen => !isOpen)
  }

  return (
    <section className="Info Section">
      <h1 className={`Title Title_color_${color}`}>{title}</h1>
      <p className="MainText">
        <b>{mainText}</b>
      </p>
      <p className="Info-Text">{textContent}</p>
      <Features items={features} />
      <Collapse unmountOnExit in={isOpen} timeout={1000}>
        <Features items={extraFeatures} />
      </Collapse>
      <div className="Info-More">
        <ColorButton
          variant={isOpen ? 'outlined' : 'contained'}
          color={color}
          endIcon={<DropdownIcon isOpen={isOpen} />}
          onClick={handleIsOpenToggle}
        >
          Подробнее
        </ColorButton>
      </div>
    </section>
  )
}
