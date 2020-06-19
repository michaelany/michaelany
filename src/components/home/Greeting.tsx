import React from 'react'
import {Link} from 'react-router-dom'
import Typist from 'react-typist'
import Button from '@material-ui/core/Button'
import WebIcon from '@material-ui/icons/WebRounded'
import MailIcon from '@material-ui/icons/MailRounded'

import './Greeting.scss'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import {PATHS, TYPIST_PROPS} from '../../utils/constants'
import {TITLES} from '../../data/common'

export default function Greeting(): JSX.Element {
  return (
    <section className="Greeting Section">
      <div className="Greeting-Ceil">
        <Typist {...TYPIST_PROPS} className="Greeting-First">
          <p className="Greeting-Text Greeting-Text_thick Title">
            <b>Привет!</b>
          </p>
        </Typist>
        <div className="Greeting-Second">
          <HelloIcon className="Greeting-Icon" />
        </div>
      </div>
      <p className="Greeting-Text Greeting-Third Title">Меня зовут</p>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_second">
          <span className="Greeting-Letter">M</span>ichael{' '}
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_third">
          <span className="Greeting-Letter">A</span>naniev
        </span>
        <span className="Greeting-Part Greeting-Fourth">,</span>
        <br />
        <span className="Greeting-Part Greeting-Fifth">
          я фронтенд-разработчик
        </span>
      </h1>
      <div className="Actions">
        <Button
          className="Greeting-Sixth Button Button_color_blue"
          component={Link}
          to={PATHS.portfolio}
          variant="contained"
          size="large"
          endIcon={<WebIcon />}
        >
          {TITLES.portfolio}
        </Button>
        <Button
          className="Greeting-Seventh Button Button_color_green"
          component={Link}
          to={PATHS.contact}
          variant="contained"
          size="large"
          endIcon={<MailIcon />}
        >
          {TITLES.contact}
        </Button>
      </div>
    </section>
  )
}
