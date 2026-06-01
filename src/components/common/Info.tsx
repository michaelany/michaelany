import {useState, memo} from 'react'
import {useTranslation, Trans} from 'react-i18next'

import {Section} from '#components/common'
import {scrollToView} from '#utils/helpers'
import {ROOT} from '#utils/constants'
import Features from './Features'
import ExpandAction from './ExpandAction'
import type {IFeature} from '#utils/types'

interface IInfoProps {
  type: string
  features: IFeature[]
  transComponents: any[]
  textValues?: (string | number)[]
}

const Info = memo(
  ({type, textValues, transComponents, features}: IInfoProps) => {
    const {t} = useTranslation()
    const storageProp = `${type}Extra`
    const [open, toggleOpen] = useState<boolean>(() => {
      const storedOpen = localStorage.getItem(storageProp)
      return storedOpen ? JSON.parse(storedOpen) : false
    })

    const handleToggle = () => {
      const value = !open
      localStorage.setItem(storageProp, JSON.stringify(value))
      toggleOpen(value)
      if (open) return
      scrollToView(ROOT)
    }

    return (
      <Section>
        <h1 className="Title">{t(`title.${type}`)}</h1>
        <p className="MainText">
          <Trans
            i18nKey={`${type}.text`}
            values={textValues}
            components={transComponents}
          />
          .
        </p>
        <Features t={t} type={type} extra={open} items={features} />
        <ExpandAction expanded={open} onToggle={handleToggle} />
      </Section>
    )
  }
)

export default Info
