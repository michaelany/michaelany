import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {getHours} from 'date-fns'
import {Button} from '@mui/material'
import {
  WidgetsRounded as WidgetsIcon,
  MailRounded as MailIcon,
  SmartDisplayRounded as SmartDisplayIcon,
} from '@mui/icons-material'

import './Greeting.scss'
import frontendImg from '#assets/images/frontend.svg'
import youtubeImg from '#assets/images/youtube.svg'
import meImg from '#assets/images/me.webp'
import me2xImg from '#assets/images/me@2x.webp'
import meMdImg from '#assets/images/me_md.webp'
import meMd2xImg from '#assets/images/me_md@2x.webp'
import meXsImg from '#assets/images/me_xs.webp'
import meXs2xImg from '#assets/images/me_xs@2x.webp'
import {Section} from '#components/common'
import HelloIcon from '#assets/images/hello.svg?react'
import {CONTACT_LINK, MY_NAME} from '#data/common'
import {ROUTE, QUERY_BREAKPOINT, BLANK_LINK_PROPS} from '#utils/constants'

export default function Greeting() {
  const {t} = useTranslation()

  return (
    <Section centeredContent className="Greeting">
      <p className="Greeting-Text Greeting-One Title">
        {t(`home.hi.${getDayTime()}`)}
        !<wbr />
        <span className="Greeting-IconWrapper Greeting-Two">
          <HelloIcon className="Greeting-Icon" />
        </span>
      </p>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Text Greeting-Three Title">
          {t('home.iam')}
        </span>{' '}
        <span className="Greeting-Part Greeting-Four">
          <span className="Greeting-Main">Michael</span>
        </span>{' '}
        <span className="Greeting-Part Greeting-Five">
          <span className="Greeting-Main">Any</span>
          <span className="Greeting-Part Greeting-Six">,</span>
        </span>
      </h1>
      <p className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Seven">
          <strong className="Greeting-Word">
            {t('home.occupation.part1')}
            <Link
              className="Greeting-Badge Greeting-Badge_first"
              to={ROUTE.skills}
            >
              <img
                className="Greeting-BadgeImg"
                width={60}
                height={68}
                src={frontendImg}
                alt="Frontend"
              />
            </Link>
          </strong>
          <br />
          <strong>{t('home.occupation.part2')}</strong>{' '}
          <span className="Greeting-Part Greeting-Subtext Greeting-Eight">
            &&
          </span>
        </span>
        <br />
        <span className="Greeting-Part Greeting-Nine">
          <strong>
            <span className="Greeting-Word">
              {t('home.occupation.part3')}
              <a
                {...BLANK_LINK_PROPS}
                className="Greeting-Badge Greeting-Badge_second"
                href={CONTACT_LINK.youTube.href}
              >
                <img
                  className="Greeting-BadgeImg"
                  width={65}
                  height={46}
                  src={youtubeImg}
                  alt={CONTACT_LINK.youTube.title}
                />
              </a>
            </span>
          </strong>
        </span>
      </p>
      <div className="Greeting-Actions Actions">
        {links.map(({Icon, ...link}) => (
          <Button
            key={link.key}
            className={`Greeting-Button Button Button_color_${link.color}`}
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
          srcSet={`${meXsImg}, ${meXs2xImg} 2x`}
        />
        <source
          width={320}
          media={QUERY_BREAKPOINT.lg}
          srcSet={`${meMdImg}, ${meMd2xImg} 2x`}
        />
        <img
          className="Greeting-Photo"
          width={480}
          src={meImg}
          srcSet={`${me2xImg} 2x`}
          alt={MY_NAME}
          loading="lazy"
        />
      </picture>
    </Section>
  )
}

const getDayTime = (): 'night' | 'morning' | 'afternoon' | 'evening' => {
  const hours = getHours(new Date())
  if (hours >= 0 && hours < 6) return 'night'
  if (hours >= 6 && hours < 12) return 'morning'
  if (hours >= 12 && hours < 18) return 'afternoon'
  return 'evening'
}

const links = [
  {key: 'portfolio', color: 'blue', Icon: WidgetsIcon},
  {key: 'contact', color: 'green', Icon: MailIcon},
  {key: 'blog', color: 'red', Icon: SmartDisplayIcon},
]
