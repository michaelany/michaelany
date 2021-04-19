import {useTranslation, TFunction} from 'react-i18next'
import {NavLink} from 'react-router-dom'
import {Button, SvgIcon} from '@material-ui/core'
import {
  HomeRounded as HomeIcon,
  PersonRounded as PersonIcon,
  SchoolRounded as SchoolIcon,
  WorkRounded as WorkIcon,
  WebRounded as WebIcon,
  MailRounded as MailIcon,
} from '@material-ui/icons'

import './Navigation.scss'
import Tooltip from './Tooltip'
import {ROUTE} from '../../utils/constants'
import {Route} from '../../utils/types'

interface NavigationProps {
  onClose?: () => void
}

interface NavLinkInterface {
  title: string
  to: Route
  Icon: typeof SvgIcon
}

interface ItemProps extends NavigationProps, NavLinkInterface {
  t: TFunction
}

const Item = ({title, to, Icon, t, onClose}: ItemProps): JSX.Element => {
  const titleStr: string = t(`title.${title}`)!

  return (
    <li>
      <Tooltip title={titleStr} placement="right">
        <Button
          fullWidth
          exact={to !== ROUTE.portfolio}
          className="NavigationButton"
          activeClassName="Colorful"
          component={NavLink}
          to={to}
          aria-label={titleStr}
          onClick={onClose}
        >
          <Icon fontSize="inherit" />
        </Button>
      </Tooltip>
    </li>
  )
}

export default function Navigation({onClose}: NavigationProps): JSX.Element {
  const {t} = useTranslation()

  const navLinks: NavLinkInterface[] = [
    {title: 'home', to: ROUTE.home, Icon: HomeIcon},
    {title: 'about', to: ROUTE.about, Icon: PersonIcon},
    {title: 'skills', to: ROUTE.skills, Icon: SchoolIcon},
    {title: 'experience', to: ROUTE.experience, Icon: WorkIcon},
    {title: 'portfolio', to: ROUTE.portfolio, Icon: WebIcon},
    {title: 'contact', to: ROUTE.contact, Icon: MailIcon},
  ]

  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map((link: NavLinkInterface, index: number) => (
          <Item key={index} {...link} t={t} onClose={onClose} />
        ))}
      </ul>
    </nav>
  )
}
