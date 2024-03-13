import {useTranslation} from 'react-i18next'
import {Tooltip} from '@mui/material'
import {ChatRounded as ChatIcon} from '@mui/icons-material'

import {Section} from '#components/common'
import {ROUTE} from '#utils/constants'
import {DURATION} from '#styles/theme'
import Projects from './Projects'

export default function Portfolio() {
  const {t} = useTranslation()

  return (
    <Section wide prevTo={ROUTE.experience} nextTo={ROUTE.vlog}>
      <div>
        <h1 className="Title Title_withIcon">
          {t('title.portfolio')}
          {import.meta.env.VITE_SHOW_PRIVATE_PROJECTS !== 'true' && (
            <Tooltip
              title={t('portfolio.limit', {replace: ['NDA', '👀']})}
              enterDelay={0}
              enterTouchDelay={0}
              leaveTouchDelay={DURATION.lingering}
            >
              <div className="TitleIconWrapper">
                <ChatIcon />
              </div>
            </Tooltip>
          )}
        </h1>
        <Projects />
      </div>
    </Section>
  )
}
