import {useState, memo} from 'react'
import {useTranslation, Trans} from 'react-i18next'
import cn from 'clsx'
import {Button} from '@material-ui/core'
import {ExpandMoreRounded as ExpandMoreIcon} from '@material-ui/icons'

import './Info.scss'
import Features from './Features'
import Animate from './Animate'
import {scrollToView} from '../../utils/helpers'
import {ROOT} from '../../utils/constants'
import {Feature} from '../../utils/types'

interface InfoProps {
  type: string
  features: Feature[]
  textValue?: string
}

const transComponents = {strong: <strong />}

function Info({type, textValue, features}: InfoProps): JSX.Element {
  const {t} = useTranslation()
  const storageProp: string = `${type}Extra`
  const [open, toggleOpen] = useState<boolean>(
    localStorage[storageProp] ? JSON.parse(localStorage[storageProp]) : false
  )

  const handleToggle = (): void => {
    const value = !open
    localStorage.setItem(storageProp, JSON.stringify(value))
    toggleOpen(value)
    if (open) return
    scrollToView(ROOT)
  }

  return (
    <section className="Info Section">
      <h1 className="Title">{t(`title.${type}`)}</h1>
      <p className="MainText">
        <Trans
          i18nKey={`${type}.text`}
          values={{value: textValue}}
          components={transComponents}
        />
      </p>
      <Features t={t} type={type} extra={open} items={features} />
      <Animate className="Actions Actions_center" effect="bottom">
        <Button
          className="Button"
          endIcon={
            <ExpandMoreIcon
              className={cn(
                'Info-DropdownIcon',
                open && 'Info-DropdownIcon_open'
              )}
            />
          }
          onClick={handleToggle}
        >
          {t('common.more')}
        </Button>
      </Animate>
    </section>
  )
}

export default memo(Info)
