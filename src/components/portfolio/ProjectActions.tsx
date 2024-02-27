import {ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from '@material-ui/core'
import {VisibilityRounded as VisibilityIcon} from '@material-ui/icons'

import './ProjectActions.scss'
import SevenGlyphsIcon from '@assets/icons/7glyphs.svg?react'
import EverpointIcon from '@assets/icons/everpoint.svg?react'
import AppleIcon from '@assets/icons/apple.svg?react'
import GooglePlayIcon from '@assets/icons/googleplay.svg?react'
import {Animate} from '@components/common'
import {BLANK_LINK_PROPS} from '@utils/constants'
import {CompanyName} from '@utils/types'

interface ProjectActionsProps {
  url?: string
  details?: string
  stores?: string[]
  companyName: CompanyName
}

interface LinkProps {
  children: ReactNode
  href: string
  icon: ReactNode
}

export default function ProjectActions({
  url,
  details,
  stores,
  companyName,
}: ProjectActionsProps) {
  const {t} = useTranslation()

  if (!url && !details && !stores) return null

  return (
    <div className="ProjectActions Actions Actions_center">
      {url && (
        <Link icon={<VisibilityIcon />} href={url}>
          {t('other.see')}
        </Link>
      )}
      {details && (
        <Link
          icon={
            companyName === 'everpoint' ? (
              <EverpointIcon />
            ) : (
              <SevenGlyphsIcon width={16} height={16} />
            )
          }
          href={details}
        >
          {t('other.more')}
        </Link>
      )}
      {stores && (
        <>
          <Link icon={<AppleIcon />} href={stores[0]}>
            AppStore
          </Link>
          <Link icon={<GooglePlayIcon />} href={stores[1]}>
            Google Play
          </Link>
        </>
      )}
    </div>
  )
}

const Link = ({children, href, icon}: LinkProps) => (
  <Animate className="ProjectActions-Link" effect="bottom">
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
