import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'
import HomeIcon from '@material-ui/icons/HomeRounded'
import PersonIcon from '@material-ui/icons/PersonRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import WorkIcon from '@material-ui/icons/WorkRounded'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Navigation.scss'
import Tooltip from './Tooltip'
import {ROUTE} from '../../utils/constants'
import {Route} from '../../utils/types'
import {TITLE} from '../../data/common'

interface NavigationProps {
  onClose?: () => void
}

interface NavLinkInterface {
  title: string
  to: Route
  Icon: typeof SvgIcon
}

const navLinks: NavLinkInterface[] = [
  {title: TITLE.home, to: ROUTE.home, Icon: HomeIcon},
  {title: TITLE.about, to: ROUTE.about, Icon: PersonIcon},
  {title: TITLE.skills, to: ROUTE.skills, Icon: SchoolIcon},
  {title: TITLE.experience, to: ROUTE.experience, Icon: WorkIcon},
  {title: TITLE.portfolio, to: ROUTE.portfolio, Icon: WebIcon},
  {title: TITLE.contact, to: ROUTE.contact, Icon: MailIcon},
]

export default function Navigation({onClose}: NavigationProps): JSX.Element {
  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map(({Icon, ...link}: NavLinkInterface, index: number) => (
          <li key={index}>
            <Tooltip title={link.title} placement="right">
              <Button
                fullWidth
                exact={link.to !== ROUTE.portfolio}
                className="Navigation-Link"
                activeClassName="Colorful"
                component={NavLink}
                to={link.to}
                aria-label={link.title}
                onClick={onClose}
              >
                <Icon fontSize="inherit" />
              </Button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </nav>
  )
}
