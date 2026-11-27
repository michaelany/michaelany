import {useTranslation} from 'react-i18next'
import {Button} from '@mui/material'
import {VisibilityRounded as VisibilityIcon} from '@mui/icons-material'
import type {ReactNode} from 'react'

import './ProjectActions.scss'
import SevenGlyphsIcon from '#assets/icons/7glyphs.svg?react'
import EverpointIcon from '#assets/icons/everpoint.svg?react'
import AppleIcon from '#assets/icons/apple.svg?react'
import GooglePlayIcon from '#assets/icons/googleplay.svg?react'
import {Animate} from '#components/common'
import {FEATURE} from '#data/common'
import {BLANK_LINK_PROPS} from '#utils/constants'
import type {TCompanyName} from '#utils/types'

interface IProjectActionsProps {
  url?: string
  details?: string
  stores?: string[]
  companyName: TCompanyName
}

interface ILinkProps {
  children: ReactNode
  href: string
  icon: ReactNode
}

export default function ProjectActions({
  url,
  details,
  stores,
  companyName,
}: IProjectActionsProps) {
  const {t} = useTranslation()

  if (!url && !details && !stores) return null

  const DetailsIcon =
    companyName === 'everpoint' ? EverpointIcon : SevenGlyphsIcon

  return (
    <div className="Actions Actions_center">
      {url && (
        <Link icon={<VisibilityIcon />} href={url}>
          {t('other.see')}
        </Link>
      )}
      {details && (
        <Link icon={<DetailsIcon aria-hidden />} href={details}>
          {t('other.more')}
        </Link>
      )}
      {stores && (
        <>
          <Link icon={<AppleIcon aria-hidden />} href={stores[0]}>
            {FEATURE.appStore}
          </Link>
          <Link icon={<GooglePlayIcon aria-hidden />} href={stores[1]}>
            {FEATURE.googlePlay}
          </Link>
        </>
      )}
    </div>
  )
}

const Link = ({children, href, icon}: ILinkProps) => (
  <Animate className="ProjectActions-Link">
    <Button
      {...BLANK_LINK_PROPS}
      className="Button"
      component="a"
      endIcon={icon}
      href={href}
    >
      {children}
    </Button>
  </Animate>
)
