import {useTranslation, TFunction} from 'react-i18next'
import {NavLink} from 'react-router-dom'
import {Button, SvgIcon} from '@material-ui/core'
import {
  HomeRounded as HomeIcon,
  PersonRounded as PersonIcon,
  BuildRounded as BuildIcon,
  WorkRounded as WorkIcon,
  WidgetsRounded as WidgetsIcon,
  MailRounded as MailIcon,
} from '@material-ui/icons'

import './Navigation.scss'
import Tooltip from './Tooltip'
import {ROUTE} from 'utils/constants'
import {Route} from 'utils/types'

interface NavigationProps {
  onClose?: () => void
}

interface NavLinkInterface {
  tKey: string
  to: Route
  Icon: typeof SvgIcon
}

interface ItemProps extends NavigationProps, NavLinkInterface {
  t: TFunction
}

export default function Navigation({onClose}: NavigationProps) {
  const {t} = useTranslation()

  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map((link: NavLinkInterface) => (
          <Item key={link.tKey} {...link} t={t} onClose={onClose} />
        ))}
      </ul>
    </nav>
  )
}

const Item = ({tKey, to, Icon, t, onClose}: ItemProps) => {
  const title: string = t(`title.${tKey}`)!

  return (
    <li>
      <Tooltip title={title} placement="right">
        <Button
          fullWidth
          component={NavLink}
          className="NavigationButton"
          to={to}
          aria-label={title}
          onClick={onClose}
        >
          <Icon fontSize="inherit" />
        </Button>
      </Tooltip>
    </li>
  )
}

const navLinks: NavLinkInterface[] = [
  {tKey: 'home', to: ROUTE.home, Icon: HomeIcon},
  {tKey: 'about', to: ROUTE.about, Icon: PersonIcon},
  {tKey: 'skills', to: ROUTE.skills, Icon: BuildIcon},
  {tKey: 'experience', to: ROUTE.experience, Icon: WorkIcon},
  {tKey: 'portfolio', to: ROUTE.portfolio, Icon: WidgetsIcon},
  {tKey: 'contact', to: ROUTE.contact, Icon: MailIcon},
]
