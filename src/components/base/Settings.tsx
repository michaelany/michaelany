import {useTranslation} from 'react-i18next'
import {Button} from '@material-ui/core'

import './Settings.scss'
import {ReactComponent as EnIcon} from '../../assets/icons/en.svg'
import {ReactComponent as RuIcon} from '../../assets/icons/ru.svg'
import {Tooltip} from '../common'

const languageIcon = {
  en: EnIcon,
  ru: RuIcon,
}

export default function Settings(): JSX.Element {
  const {t, i18n} = useTranslation()

  const handleLanguageSwitch = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const Icon = languageIcon[i18n.language as 'en' | 'ru']

  const title = t('title.language')

  return (
    <div className="Settings">
      <Tooltip title={title} placement="right">
        <Button
          fullWidth
          className="NavigationButton"
          aria-label={title}
          onClick={handleLanguageSwitch}
        >
          <Icon className="Settings-Icon" />
        </Button>
      </Tooltip>
    </div>
  )
}
