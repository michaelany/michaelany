import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import SvgIcon from '@material-ui/core/SvgIcon'
import HomeIcon from '@material-ui/icons/HomeRounded'
import PersonIcon from '@material-ui/icons/PersonRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import WorkIcon from '@material-ui/icons/WorkRounded'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Navigation.scss'
import {Path, Title} from '../../utils/enums'

interface INavLink {
  title: Title
  to: Path
  Icon: typeof SvgIcon
}

const navLinks: INavLink[] = [
  {title: Title.HOME, to: Path.HOME, Icon: HomeIcon},
  {title: Title.ABOUT, to: Path.ABOUT, Icon: PersonIcon},
  {title: Title.SKILLS, to: Path.SKILLS, Icon: SchoolIcon},
  {title: Title.EXPERIENCE, to: Path.EXPERIENCE, Icon: WorkIcon},
  {title: Title.PORTFOLIO, to: Path.PORTFOLIO, Icon: WebIcon},
  {title: Title.CONTACT, to: Path.CONTACT, Icon: MailIcon},
]

export default function Navigation(): JSX.Element {
  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map(
          ({title, to, Icon}: INavLink, index: number): JSX.Element => (
            <li key={index}>
              <Tooltip title={title} placement="right">
                <Button
                  fullWidth
                  exact
                  className="Navigation-Link"
                  activeClassName="Navigation-Link_active"
                  component={NavLink}
                  to={to}
                  aria-label={title}
                >
                  <Icon fontSize="inherit" />
                </Button>
              </Tooltip>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
