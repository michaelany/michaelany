import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {OverridableComponent} from '@material-ui/core/OverridableComponent'
import {SvgIconTypeMap} from '@material-ui/core/SvgIcon'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Greeting.scss'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import {Title, Path} from '../../utils/enums'
import {Color} from '../../utils/types'

interface ILink {
  id: number
  color: Color
  path: Path
  title: Title
  Icon: OverridableComponent<SvgIconTypeMap>
}

const links: ILink[] = [
  {
    id: 1,
    color: 'blue',
    path: Path.PORTFOLIO,
    title: Title.PORTFOLIO,
    Icon: WebIcon,
  },
  {
    id: 2,
    color: 'green',
    path: Path.CONTACT,
    title: Title.CONTACT,
    Icon: MailIcon,
  },
]

const renderLinks = (): JSX.Element[] =>
  links.map(
    ({id, color, path, title, Icon}: ILink): JSX.Element => (
      <Button
        key={id}
        className={`Button Button_color_${color}`}
        component={Link}
        to={path}
        variant="contained"
        size="large"
        endIcon={<Icon />}
      >
        {title}
      </Button>
    )
  )

export default function Greeting(): JSX.Element {
  return (
    <section className="Greeting Section">
      <h1 className="VisuallyHidden">{Title.HOME}</h1>
      <p className="Greeting-Title Title">
        <b>
          Привет!
          <HelloIcon className="Greeting-Icon" />
        </b>
      </p>
      <p className="Greeting-Text Title">
        <b>Меня зовут</b>
      </p>
      <p className="Greeting-Text Title">
        <b>
          <span className="Greeting-Letter">M</span>ichael{' '}
          <span className="Greeting-Letter">A</span>naniev,
        </b>
      </p>
      <p className="Greeting-Text Title">
        <b>я фронтенд-разработчик</b>
      </p>
      <div className="Actions">{renderLinks()}</div>
    </section>
  )
}
