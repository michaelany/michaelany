import {useTranslation} from 'react-i18next'
import {
  CopyrightRounded as CopyrightIcon,
  FavoriteRounded as FavoriteIcon,
} from '@material-ui/icons'

import './Copyright.scss'
import {TODAY, BLANK_LINK_PROPS} from '../../utils/constants'
import {CONTACT_LINK} from '../../data/common'

const year: number = TODAY.getFullYear()

export default function Copyright() {
  const {t} = useTranslation()

  return (
    <footer className="Copyright">
      <CopyrightIcon className="Copyright-Icon" /> <time>{year}</time>,{' '}
      {t('copyright.crafted')}{' '}
      <a
        {...BLANK_LINK_PROPS}
        className="Copyright-Link"
        href={CONTACT_LINK.gitHub.href}
      >
        {t('copyright.me')}
      </a>{' '}
      {t('copyright.with')} <FavoriteIcon className="Copyright-Icon" />
    </footer>
  )
}
