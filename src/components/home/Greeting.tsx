import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {getHours} from 'date-fns'
import {Button} from '@mui/material'
import {
  WidgetsRounded as WidgetsIcon,
  MailRounded as MailIcon,
  CameraAltRounded as CameraAltIcon,
} from '@mui/icons-material'

import './Greeting.scss'
import frontendImg from '#assets/img/pictures/frontend.svg'
import youtubeImg from '#assets/img/pictures/youtube.svg'
import meImg from '#assets/img/pictures/me.jpg'
import me2xImg from '#assets/img/pictures/me@2x.jpg'
import meMdImg from '#assets/img/pictures/me_md.jpg'
import meMd2xImg from '#assets/img/pictures/me_md@2x.jpg'
import meXsImg from '#assets/img/pictures/me_xs.jpg'
import meXs2xImg from '#assets/img/pictures/me_xs@2x.jpg'
import meNewYearImg from '#assets/img/pictures/me-santa.jpg'
import meNewYear2xImg from '#assets/img/pictures/me-santa@2x.jpg'
import meNewYearMdImg from '#assets/img/pictures/me-santa_md.jpg'
import meNewYearMd2xImg from '#assets/img/pictures/me-santa_md@2x.jpg'
import meNewYearXsImg from '#assets/img/pictures/me-santa_xs.jpg'
import meNewYearXs2xImg from '#assets/img/pictures/me-santa_xs@2x.jpg'
import {Section} from '#components/common'
import HelloIcon from '#assets/icons/hello.svg?react'
import {CONTACT_LINK, MY_NAME} from '#data/common'
import {
  ROUTE,
  QUERY_BREAKPOINT,
  BLANK_LINK_PROPS,
  IS_NEW_YEAR_MODE,
} from '#utils/constants'

export default function Greeting() {
  const {t} = useTranslation()

  return (
    <Section className="Greeting">
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
          <span className="Greeting-Part Greeting-Fourth Greeting-Fourth_first">
            ,
          </span>
        </span>
      </h1>
      <p className="Greeting-Text Greeting-Fifth Title">
        <strong>
          <span className="Greeting-Word">
            {t('home.occupation.part1')}
            <Link
              className="Greeting-Extra Greeting-Extra_first"
              to={ROUTE.skills}
            >
              <img
                className="Greeting-ExtraImg"
                width={60}
                height={68}
                src={frontendImg}
                alt="Frontend"
              />
            </Link>
          </span>
          <br />
          {t('home.occupation.part2')}
        </strong>
        <span className="Greeting-Part Greeting-Fourth Greeting-Fourth_second">
          ,
        </span>
      </p>
      <p className="Greeting-Text Greeting-Sixth Title">
        <strong>
          <span className="Greeting-Word">
            {t('home.occupation.part3')}
            <a
              {...BLANK_LINK_PROPS}
              className="Greeting-Extra Greeting-Extra_second"
              href={CONTACT_LINK.youTube.href}
            >
              <img
                className="Greeting-ExtraImg"
                width={65}
                height={46}
                src={youtubeImg}
                alt={CONTACT_LINK.youTube.title}
              />
            </a>
          </span>
        </strong>
      </p>
      <p className="Greeting-SubText Greeting-Seventh MainText">
        {t('about.feature.position.label')}{' '}
        {t('about.feature.vlogger.extraLabel', {
          replace: [CONTACT_LINK.youTube.title],
        })}
        .
      </p>
      <div className="Greeting-Actions Actions">
        {links.map(({Icon, ...link}) => (
          <Button
            key={link.key}
            className={`Greeting-${link.order} Greeting-Button Button Button_color_${link.color}`}
            component={Link}
            to={ROUTE[link.key]}
            size="large"
            endIcon={<Icon />}
          >
            {t(`title.${link.key}`)}
          </Button>
        ))}
      </div>
      <picture>
        <source
          width={180}
          media={QUERY_BREAKPOINT.xs}
          srcSet={`${me.xsImg}, ${me.xsImg2x} 2x`}
        />
        <source
          width={320}
          media={QUERY_BREAKPOINT.lg}
          srcSet={`${me.mdImg}, ${me.mdImg2x} 2x`}
        />
        <img
          className="Greeting-Photo"
          width={480}
          src={me.img}
          srcSet={`${me.img2x} 2x`}
          alt={MY_NAME}
          loading="lazy"
        />
      </picture>
    </Section>
  )
}

const getDayTime = (): 'night' | 'morning' | 'afternoon' | 'evening' => {
  const hours: number = getHours(new Date())
  if (hours >= 0 && hours < 6) return 'night'
  if (hours >= 6 && hours < 12) return 'morning'
  if (hours >= 12 && hours < 18) return 'afternoon'
  return 'evening'
}

const links = [
  {key: 'portfolio', color: 'blue', order: 'Eighth', Icon: WidgetsIcon},
  {key: 'contact', color: 'green', order: 'Nineth', Icon: MailIcon},
  {key: 'vlog', color: 'red', order: 'Tenth', Icon: CameraAltIcon},
]

const me = {
  img: IS_NEW_YEAR_MODE ? meNewYearImg : meImg,
  img2x: IS_NEW_YEAR_MODE ? meNewYear2xImg : me2xImg,
  mdImg: IS_NEW_YEAR_MODE ? meNewYearMdImg : meMdImg,
  mdImg2x: IS_NEW_YEAR_MODE ? meNewYearMd2xImg : meMd2xImg,
  xsImg: IS_NEW_YEAR_MODE ? meNewYearXsImg : meXsImg,
  xsImg2x: IS_NEW_YEAR_MODE ? meNewYearXs2xImg : meXs2xImg,
}
