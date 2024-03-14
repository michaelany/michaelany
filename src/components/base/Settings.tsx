import {useTranslation} from 'react-i18next'
import {Button} from '@mui/material'

import './Settings.scss'
import EnIcon from '#assets/icons/en.svg?react'
import RuIcon from '#assets/icons/ru.svg?react'
import {Tooltip} from '#components/common'

export default function Settings() {
  const {t, i18n} = useTranslation()
  const ruLng = i18n.language === 'ru'

  const handleLanguageSwitch = () => i18n.changeLanguage(ruLng ? 'en' : 'ru')

  const Icon = ruLng ? RuIcon : EnIcon
  const title = t('title.language')

  return (
    <div>
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
