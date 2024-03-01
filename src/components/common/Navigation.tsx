import {useTranslation} from 'react-i18next'
import {TFunction} from 'i18next'
import {NavLink} from 'react-router-dom'
import {Button, SvgIcon} from '@mui/material'
import {
  HomeRounded as HomeIcon,
  PersonRounded as PersonIcon,
  BuildRounded as BuildIcon,
  WorkRounded as WorkIcon,
  WidgetsRounded as WidgetsIcon,
  CameraAltRounded as CameraAltIcon,
  MailRounded as MailIcon,
} from '@mui/icons-material'

import './Navigation.scss'
import {ROUTE} from '@utils/constants'
import {TRoute} from '@utils/types'
import Tooltip from './Tooltip'

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

  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map((link: INavLink) => (
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
  {tKey: 'vlog', to: ROUTE.vlog, Icon: CameraAltIcon},
  {tKey: 'contact', to: ROUTE.contact, Icon: MailIcon},
]
