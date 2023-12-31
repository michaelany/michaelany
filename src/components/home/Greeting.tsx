import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {getHours} from 'date-fns'
import {Button} from '@material-ui/core'
import {
  WidgetsRounded as WidgetsIcon,
  MailRounded as MailIcon,
} from '@material-ui/icons'

import './Greeting.scss'
import frontEndImg from '@assets/img/pictures/frontend.png'
import frontEndImg2x from '@assets/img/pictures/frontend@2x.png'
/* import meImg from '@assets/img/pictures/me.jpg'
import meImg2x from '@assets/img/pictures/me@2x.jpg'
import meMdImg from '@assets/img/pictures/me_md.jpg'
import meMdImg2x from '@assets/img/pictures/me_md@2x.jpg'
import meXsImg from '@assets/img/pictures/me_xs.jpg'
import meXsImg2x from '@assets/img/pictures/me_xs@2x.jpg' */
import meSantaImg from '@assets/img/pictures/me-santa.jpg'
import meSantaImg2x from '@assets/img/pictures/me-santa@2x.jpg'
import meSantaMdImg from '@assets/img/pictures/me-santa_md.jpg'
import meSantaMdImg2x from '@assets/img/pictures/me-santa_md@2x.jpg'
import meSantaXsImg from '@assets/img/pictures/me-santa_xs.jpg'
import meSantaXsImg2x from '@assets/img/pictures/me-santa_xs@2x.jpg'
import {ReactComponent as HelloIcon} from '@assets/icons/hello.svg'
import {MY_NAME} from '@data/common'
import {ROUTE, QUERY_BREAKPOINT} from '@utils/constants'

export default function Greeting() {
  const {t} = useTranslation()

  return (
    <section className="Greeting Section">
      <div>
        <p className="Greeting-Text Greeting-First Title">
          {t(`home.hi.${getDayTime()}`)}
          <span className="Greeting-Nowrap">
            !
            <span className="Greeting-Second">
              <HelloIcon className="Greeting-Icon" />
            </span>
          </span>
        </p>
      </div>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Text Greeting-Third Title">
          {t('home.iam')}
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_second">
          <span className="Greeting-Main">Michael</span>
        </span>{' '}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_third">
          <span className="Greeting-Main">Any</span>
          <span className="Greeting-Part Greeting-Fourth">,</span>
        </span>
      </h1>
      <p className="Greeting-Text Greeting-Fifth Title">
        <strong>
          {t('home.occupation.part1')}
          <br />
          <span className="Greeting-Word">
            {t('home.occupation.part2')}
            <Link className="Greeting-Extra" to={ROUTE.skills}>
              <img
                className="Greeting-ExtraImg"
                width={60}
                height={68}
                src={frontEndImg}
                srcSet={`${frontEndImg2x} 2x`}
                alt="Frontend"
              />
            </Link>
          </span>
        </strong>
      </p>
      <p className="Greeting-SubText Greeting-Sixth MainText">
        {t('about.feature.position.label')}
      </p>
      <div className="Greeting-Actions Actions">
        <Button
          className="Greeting-Seventh Greeting-Button Button Button_color_blue"
          component={Link}
          to={ROUTE.portfolio}
          size="large"
          endIcon={<WidgetsIcon />}
        >
          {t('title.portfolio')}
        </Button>
        <Button
          className="Greeting-Eighth Greeting-Button Button Button_color_green"
          component={Link}
          to={ROUTE.contact}
          size="large"
          endIcon={<MailIcon />}
        >
          {t('title.contact')}
        </Button>
      </div>
      <picture>
        <source
          width={180}
          media={QUERY_BREAKPOINT.xs}
          srcSet={`${meSantaXsImg}, ${meSantaXsImg2x} 2x`}
        />
        <source
          width={320}
          media={QUERY_BREAKPOINT.lg}
          srcSet={`${meSantaMdImg}, ${meSantaMdImg2x} 2x`}
        />
        <img
          className="Greeting-Photo"
          width={480}
          src={meSantaImg}
          srcSet={`${meSantaImg2x} 2x`}
          alt={MY_NAME}
        />
      </picture>
    </section>
  )
}

const getDayTime = (): 'night' | 'morning' | 'afternoon' | 'evening' => {
  const hours: number = getHours(new Date())
  if (hours >= 0 && hours < 6) return 'night'
  if (hours >= 6 && hours < 12) return 'morning'
  if (hours >= 12 && hours < 18) return 'afternoon'
  return 'evening'
}
