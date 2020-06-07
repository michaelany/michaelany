import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Greeting.scss'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import {PATHS} from '../../utils/constants'
import {TITLES} from '../../data/common'

export default function Greeting(): JSX.Element {
  return (
    <section className="Greeting Section">
      <p className="Greeting-Text Greeting-Text_thick Title">
        <b>
          Привет!
          <HelloIcon className="Greeting-Icon" />
        </b>
      </p>
      <p className="Greeting-Text Title">Меня зовут</p>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Letter">M</span>ichael{' '}
        <span className="Greeting-Letter">A</span>naniev,
        <br />я фронтенд-разработчик
      </h1>
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
