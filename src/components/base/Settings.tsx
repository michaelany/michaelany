import {useTranslation} from 'react-i18next'
import {Button} from '@material-ui/core'

import './Settings.scss'
import EnIcon from '@assets/icons/en.svg?react'
import RuIcon from '@assets/icons/ru.svg?react'
import {Tooltip} from '@components/common'
import {isRuLng} from '@utils/i18n'

export default function Settings() {
  const {t, i18n} = useTranslation()
  const isRu = isRuLng(i18n.language)

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(isRu ? 'en' : 'ru')
  }

  const Icon = isRu ? RuIcon : EnIcon
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
