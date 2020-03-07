import React, {ElementType} from 'react'
import {NavLink} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import {SvgIconProps} from '@material-ui/core/SvgIcon'
import HomeIcon from '@material-ui/icons/HomeRounded'
import PersonIcon from '@material-ui/icons/PersonRounded'
import SchoolIcon from '@material-ui/icons/SchoolRounded'
import WorkIcon from '@material-ui/icons/WorkRounded'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Navigation.scss'
import {Route, Title} from '../../utils/enums'
import THEME from '../../styles/theme'

interface INavLink {
  id: number
  title: string
  to: string
  Icon: (props: SvgIconProps) => JSX.Element
}

const navLinks: INavLink[] = [
  {id: 1, title: Title.HOME, to: Route.HOME, Icon: HomeIcon},
  {id: 2, title: Title.ABOUT, to: Route.ABOUT, Icon: PersonIcon},
  {id: 3, title: Title.SKILLS, to: Route.SKILLS, Icon: SchoolIcon},
  {id: 4, title: Title.EXPERIENCE, to: Route.EXPERIENCE, Icon: WorkIcon},
  {id: 5, title: Title.PORTFOLIO, to: Route.PORTFOLIO, Icon: WebIcon},
  {id: 6, title: Title.CONTACT, to: Route.CONTACT, Icon: MailIcon},
]

const NavLinkButton: ElementType = withStyles({
  root: {
    fontSize: 32,
    height: 54,
    transition: `color ${THEME.DURATION.SHORT}ms ${THEME.EASING.EASE_IN_OUT}, background-color ${THEME.DURATION.SHORT}ms ${THEME.EASING.EASE_IN_OUT}`,
  },
})(Button)

const renderedLinks = navLinks.map(({id, title, to, Icon}: INavLink) => {
  return (
    <li key={id}>
      <Tooltip title={title} enterDelay={THEME.DURATION.MEDIUM} placement="right">
        <NavLinkButton
          fullWidth
          exact
          className="Navigation-Link"
          activeClassName="Navigation-Link_active"
          component={NavLink}
          to={to}
          aria-label={title}
        >
          <Icon fontSize="inherit" />
        </NavLinkButton>
      </Tooltip>
    </li>
  )
})

export default function Navigation() {
  return (
    <nav className="Navigation">
      <ul>{renderedLinks}</ul>
    </nav>
  )
}
