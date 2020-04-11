import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Greeting.scss'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import {TITLES, PATHS} from '../../utils/data'

export default function Greeting(): JSX.Element {
  return (
    <section className="Greeting Section">
      <h1 className="VisuallyHidden">{TITLES.HOME}</h1>
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
      <div className="Actions">
        <Button
          className="Button Button_color_blue"
          component={Link}
          to={PATHS.PORTFOLIO}
          variant="contained"
          size="large"
          endIcon={<WebIcon />}
        >
          {TITLES.PORTFOLIO}
        </Button>
        <Button
          className="Button Button_color_green"
          component={Link}
          to={PATHS.CONTACT}
          variant="contained"
          size="large"
          endIcon={<MailIcon />}
        >
          {TITLES.CONTACT}
        </Button>
      </div>
    </section>
  )
}
