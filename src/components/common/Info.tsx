import {useState, memo} from 'react'
import {useTranslation, Trans} from 'react-i18next'
import cn from 'clsx'
import {Button} from '@material-ui/core'
import {ExpandMoreRounded as ExpandMoreIcon} from '@material-ui/icons'

import './Info.scss'
import {scrollToView} from '@utils/helpers'
import {ROOT} from '@utils/constants'
import {Feature} from '@utils/types'
import Features from './Features'
import Animate from './Animate'

interface InfoProps {
  type: string
  features: Feature[]
  textValues?: (string | number)[]
}

const Info = memo(({type, textValues, features}: InfoProps) => {
  const {t} = useTranslation()
  const storageProp = `${type}Extra`
  const [open, toggleOpen] = useState<boolean>(
    localStorage[storageProp] ? JSON.parse(localStorage[storageProp]) : false
  )

  const handleToggle = () => {
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
          values={textValues}
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
          {t('other.more')}
        </Button>
      </Animate>
    </section>
  )
})

export default Info

const transComponents = [<strong />]
