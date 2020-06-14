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
import {PATHS} from '../../utils/constants'
import {Path} from '../../utils/types'
import {TITLES} from '../../data/common'

interface NavigationProps {
  onClose?: () => void
}

interface NavLinkInterface {
  title: string
  to: Path
  Icon: typeof SvgIcon
}

const navLinks: NavLinkInterface[] = [
  {title: TITLES.HOME, to: PATHS.HOME, Icon: HomeIcon},
  {title: TITLES.ABOUT, to: PATHS.ABOUT, Icon: PersonIcon},
  {title: TITLES.SKILLS, to: PATHS.SKILLS, Icon: SchoolIcon},
  {title: TITLES.EXPERIENCE, to: PATHS.EXPERIENCE, Icon: WorkIcon},
  {title: TITLES.PORTFOLIO, to: PATHS.PORTFOLIO, Icon: WebIcon},
  {title: TITLES.CONTACT, to: PATHS.CONTACT, Icon: MailIcon},
]

export default function Navigation({onClose}: NavigationProps): JSX.Element {
  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map(({title, to, Icon}: NavLinkInterface, index: number) => (
          <li key={index}>
            <Tooltip title={title} placement="right">
              <Button
                fullWidth
                exact={to !== PATHS.PORTFOLIO}
                className="Navigation-Link"
                activeClassName="Colorful"
                component={NavLink}
                to={to}
                aria-label={title}
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
