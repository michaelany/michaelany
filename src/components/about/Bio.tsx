import React, {ElementType} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {SvgIconProps} from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import Collapse from '@material-ui/core/Collapse'
import ThumbUpIcon from '@material-ui/icons/CheckCircleRounded'
import SpeedIcon from '@material-ui/icons/SpeedRounded'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjectsRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import AccountTreeIcon from '@material-ui/icons/AccountTreeRounded'
import BrushIcon from '@material-ui/icons/BrushRounded'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherRounded'
import AllInclusiveIcon from '@material-ui/icons/AllInclusiveRounded'
import ViewQuiltIcon from '@material-ui/icons/ViewQuiltRounded'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccountRounded'
import PersonAddIcon from '@material-ui/icons/PersonAddRounded'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyRounded'
import EcoIcon from '@material-ui/icons/EcoRounded'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBikeRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import PublicIcon from '@material-ui/icons/PublicRounded'
import LocalCafeIcon from '@material-ui/icons/LocalCafeRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'

import './Bio.scss'
import ColorButton from '../_common/ColorButton'
import DropdownIcon from '../_common/DropdownIcon'
import {Title} from '../../utils/enums'
import THEME from '../../styles/theme'

interface IBioFeature {
  id: number
  title: string
  Icon: (props: SvgIconProps) => JSX.Element
}

const features: IBioFeature[] = [
  {id: 1, title: 'Выбираю простой и эффективный способ решения задачи', Icon: ThumbUpIcon},
  {id: 2, title: 'Пишу современный и быстро работающий код', Icon: SpeedIcon},
  {id: 3, title: 'Создаю модульную и оптимальную архитектуру для каждого проекта', Icon: AccountTreeIcon},
  {id: 4, title: 'Имею в арсенале большое количество паттернов и приемов', Icon: BuildIcon},
  {id: 5, title: 'Строго соблюдаю единый стиль написания чистого кода', Icon: BrushIcon},
  {id: 6, title: 'Верстаю семантично, доступно, кроссбраузерно и pixel-perfect', Icon: PaletteIcon},
  {id: 7, title: 'Реализую адаптивный интерфейс', Icon: DevicesOtherIcon},
  {id: 8, title: 'Воплощаю собственные UI/UX идеи', Icon: EmojiObjectsIcon},
  {
    id: 9,
    title: 'Нахожусь в состоянии постоянного обучения и развития',
    Icon: AllInclusiveIcon,
  },
  {id: 10, title: 'Являюсь ведущим разработчиком на проектах', Icon: SupervisorAccountIcon},
  {id: 11, title: 'Делаю код-ревью и занимаюсь обучением', Icon: ChildFriendlyIcon},
  {id: 12, title: 'Есть опыт проведения собеседований', Icon: PersonAddIcon},
  {id: 13, title: 'Люблю путешествовать', Icon: PublicIcon},
  {id: 14, title: 'Веду здоровый образ жизни', Icon: EcoIcon},
  {id: 15, title: 'Занимаюсь спортом', Icon: DirectionsBikeIcon},
  {id: 16, title: 'Имею два высших образования', Icon: SchoolIcon},
  {id: 17, title: 'Склонный к перфекционизму', Icon: ViewQuiltIcon},
  {id: 18, title: 'Кофеман', Icon: LocalCafeIcon},
]

const BioList: ElementType = withStyles({
  root: {
    '&:last-child': {
      marginTop: 16,
    },
  },
})(Grid)

const BioItem: ElementType = withStyles({
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

const renderFeatures = (features: IBioFeature[]) =>
  features.map(({id, title, Icon}: IBioFeature) => (
    <BioItem key={id} item component="li" xs={6}>
      <Icon />
      <p>{title}</p>
    </BioItem>
  ))

const mainRenderedFeatures = renderFeatures(features.slice(0, 10))
const extraRenderedFeatures = renderFeatures(features.slice(10))

const renderList = (children: JSX.Element[]) => (
  <BioList container component="ul" spacing={4}>
    {children}
  </BioList>
)

export default function Bio() {
  const [isOpen, toggleOpen] = React.useState(false)

  const handleIsOpenToggle = (): void => {
    toggleOpen(isOpen => !isOpen)
  }

  return (
    <section className="Bio Section">
      <h1 className="Title Title_color_green">{Title.ABOUT}</h1>
      <p className="MainText">
        <b>Живу и работаю в Москве. Профессионально занимаюсь веб-разработкой четыре года</b>
      </p>
      <p className="Bio-Text">
        Я фронтенд фанатик и UI разработчик. Мне нравится создавать простые, красивые и удобные сайты, и я люблю то, что
        делаю.
      </p>
      {renderList(mainRenderedFeatures)}
      <Collapse unmountOnExit in={isOpen} timeout={1000}>
        {renderList(extraRenderedFeatures)}
      </Collapse>
      <div className="Bio-More">
        <ColorButton
          variant="contained"
          color="green"
          endIcon={<DropdownIcon isOpen={isOpen} />}
          onClick={handleIsOpenToggle}
        >
          Подробнее
        </ColorButton>
      </div>
    </section>
  )
}
