import {useTranslation} from 'react-i18next'
import {matchPath, NavLink, useLocation} from 'react-router-dom'
import type {CSSProperties} from 'react'
import {Button, SvgIcon} from '@mui/material'
import {
  HomeRounded as HomeIcon,
  PersonRounded as PersonIcon,
  BuildRounded as BuildIcon,
  WorkRounded as WorkIcon,
  WidgetsRounded as WidgetsIcon,
  SmartDisplayRounded as SmartDisplayIcon,
  MailRounded as MailIcon,
} from '@mui/icons-material'
import type {TFunction} from 'i18next'

import './Navigation.scss'
import {ROUTE} from '#utils/constants'
import Tooltip from './Tooltip'
import type {TRoute} from '#utils/types'

interface INavigationProps {
  onClose?: () => void
}

interface INavLink {
  tKey: string
  to: TRoute
  Icon: typeof SvgIcon
}

interface IItemProps extends INavigationProps, INavLink {
  t: TFunction
}

export default function Navigation({onClose}: INavigationProps) {
  const {t} = useTranslation()
  const {pathname} = useLocation()

  const activeIndex = navLinks.findIndex(({to}) =>
    matchPath({path: to, end: to === ROUTE.home}, pathname)
  )
  const style = {'--nav-index': Math.max(activeIndex, 0)} as CSSProperties

  return (
    <nav className="Navigation" style={style}>
      <ul>
        {navLinks.map(link => (
          <Item key={link.tKey} {...link} t={t} onClose={onClose} />
        ))}
      </ul>
    </nav>
  )
}

const Item = ({tKey, to, Icon, t, onClose}: IItemProps) => {
  const title = t(`title.${tKey}`)

  return (
    <li>
      <Tooltip title={title} placement="right">
        <Button
          fullWidth
          component={NavLink}
          className="NavigationButton"
          to={to}
          color="inherit"
          aria-label={title}
          onClick={onClose}
        >
          <Icon fontSize="inherit" />
        </Button>
      </Tooltip>
    </li>
  )
}

const navLinks: INavLink[] = [
  {tKey: 'home', to: ROUTE.home, Icon: HomeIcon},
  {tKey: 'about', to: ROUTE.about, Icon: PersonIcon},
  {tKey: 'skills', to: ROUTE.skills, Icon: BuildIcon},
  {tKey: 'experience', to: ROUTE.experience, Icon: WorkIcon},
  {tKey: 'portfolio', to: ROUTE.portfolio, Icon: WidgetsIcon},
  {tKey: 'blog', to: ROUTE.blog, Icon: SmartDisplayIcon},
  {tKey: 'contact', to: ROUTE.contact, Icon: MailIcon},
]
