import {useTranslation, Trans} from 'react-i18next'
import {Tooltip} from '@mui/material'
import {ChatRounded as ChatIcon} from '@mui/icons-material'

import {Section} from '#components/common'
import {ROUTE, YEARS_OF_EXPERIENCE} from '#utils/constants'
import {DURATION} from '#styles/theme'
import Videos from './Videos'

export default function Blog() {
  const {t} = useTranslation()

  return (
    <Section wide prevTo={ROUTE.portfolio} nextTo={ROUTE.contact}>
      <div>
        <h1 className="Title Title_withIcon">
          {t('title.blog')}
          <Tooltip
            title={
              <Trans
                i18nKey="blog.description"
                values={['👋', YEARS_OF_EXPERIENCE, '👨‍💻', '🐑', '😉', '✌️']}
                components={[<p className="TooltipParagraph" />]}
              />
            }
            enterDelay={0}
            enterTouchDelay={0}
            leaveTouchDelay={DURATION.lingering}
          >
            <div className="TitleIconWrapper">
              <ChatIcon />
            </div>
          </Tooltip>
        </h1>
        <Videos />
      </div>
    </Section>
  )
}
