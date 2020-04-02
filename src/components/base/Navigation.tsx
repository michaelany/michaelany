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
  id: number
  title: Title
  to: Path
  Icon: typeof SvgIcon
}

const navLinks: INavLink[] = [
  {id: 1, title: Title.HOME, to: Path.HOME, Icon: HomeIcon},
  {id: 2, title: Title.ABOUT, to: Path.ABOUT, Icon: PersonIcon},
  {id: 3, title: Title.SKILLS, to: Path.SKILLS, Icon: SchoolIcon},
  {id: 4, title: Title.EXPERIENCE, to: Path.EXPERIENCE, Icon: WorkIcon},
  {id: 5, title: Title.PORTFOLIO, to: Path.PORTFOLIO, Icon: WebIcon},
  {id: 6, title: Title.CONTACT, to: Path.CONTACT, Icon: MailIcon},
]

export default function Navigation(): JSX.Element {
  return (
    <nav className="Navigation">
      <ul>
        {navLinks.map(
          ({id, title, to, Icon}: INavLink): JSX.Element => (
            <li key={id}>
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
