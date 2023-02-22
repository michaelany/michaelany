import {FunctionComponent, SVGProps} from 'react'
import {useTranslation} from 'react-i18next'
import {
  CopyrightRounded as CopyrightIcon,
  FavoriteRounded as FavoriteIcon,
} from '@material-ui/icons'

import './Copyright.scss'
import {ReactComponent as ReactIcon} from 'assets/icons/react.svg'
import {ReactComponent as MuiIcon} from 'assets/icons/mui.svg'
import {Tooltip} from '../common'
import {TODAY, BLANK_LINK_PROPS} from 'utils/constants'
import {CONTACT_LINK, TECHNOLOGY_TITLE, MAIN_TECHNOLOGY_LINK} from 'data/common'

interface Link {
  title: string
  href: string
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export default function Copyright() {
  const {t} = useTranslation()

  return (
    <footer className="Copyright">
      <p>
        <CopyrightIcon className="Copyright-Icon" /> <time>{year}</time>,{' '}
        {t('copyright.crafted')}{' '}
        <a
          {...BLANK_LINK_PROPS}
          className="Copyright-Author"
          href={CONTACT_LINK.gitHub.href}
        >
          {t('copyright.me')}
        </a>{' '}
        {t('copyright.with')} <FavoriteIcon className="Copyright-Icon" />
      </p>
      <div className="Copyright-Links">
        {links.map(({Icon, ...link}: Link, index: number) => (
          <Tooltip key={index} title={link.title}>
            <a
              {...BLANK_LINK_PROPS}
              className="Copyright-Link"
              href={link.href}
            >
              <Icon />
            </a>
          </Tooltip>
        ))}
      </div>
    </footer>
  )
}

const year: number = TODAY.getFullYear()

const links: Link[] = [
  {
    title: TECHNOLOGY_TITLE.react,
    href: MAIN_TECHNOLOGY_LINK.react,
    Icon: ReactIcon,
  },
  {
    title: TECHNOLOGY_TITLE.mui,
    href: MAIN_TECHNOLOGY_LINK.mui,
    Icon: MuiIcon,
  },
]
