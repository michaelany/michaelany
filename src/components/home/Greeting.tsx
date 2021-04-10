import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import {
  WebRounded as WebIcon,
  MailRounded as MailIcon,
} from '@material-ui/icons'

import './Greeting.scss'
import {ReactComponent as HelloIcon} from '../../assets/icons/hello.svg'
import {ReactComponent as LaptopIcon} from '../../assets/icons/laptop.svg'
import {ROUTE} from '../../utils/constants'
import {TITLE} from '../../data/common'

export default function Greeting(): JSX.Element {
  return (
    <section className="Greeting Section">
      <div className="Greeting-Block">
        <p className="Greeting-Text Greeting-First Title">Привет!</p>
        <div className="Greeting-Second">
          <HelloIcon className="Greeting-Icon" />
        </div>
      </div>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Text Greeting-Third Title">
          Я -
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_second">
          <span className="Greeting-Main Greeting-Main_colorful">Michael</span>
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_third">
          <span className="Greeting-Main Greeting-Main_colorful">Any</span>
        </span>
        <span className="Greeting-Part Greeting-Fourth">,</span>
        <br />
        <span className="Greeting-Part Greeting-Main Greeting-Fifth">
          фронтенд-
          <span className="Greeting-Word">
            разработчик
            <Link className="Greeting-Extra" to={ROUTE.skills}>
              <LaptopIcon className="Greeting-ExtraSvg" />
            </Link>
          </span>
        </span>
      </h1>
      <div className="Actions">
        <Button
          className="Greeting-Sixth Button Button_color_blue"
          component={Link}
          to={ROUTE.portfolio}
          size="large"
          endIcon={<WebIcon />}
        >
          {TITLE.portfolio}
        </Button>
        <Button
          className="Greeting-Seventh Button Button_color_green"
          component={Link}
          to={ROUTE.contact}
          size="large"
          endIcon={<MailIcon />}
        >
          {TITLE.contact}
        </Button>
      </div>
    </section>
  )
}
