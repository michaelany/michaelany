import {useTranslation, Trans} from 'react-i18next'
import {Tooltip} from '@mui/material'
import {ChatRounded as ChatIcon} from '@mui/icons-material'

import {Pagination, Copyright} from '@components/common'
import {ROUTE} from '@utils/constants'
import {DURATION} from '@styles/theme'
import Videos from './Videos'

export default function Vlog() {
  const {t} = useTranslation()

  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <h1 className="Title Title_withIcon">
          {t('title.vlog')}
          <Tooltip
            title={
              <Trans
                i18nKey="vlog.description"
                values={['👋', '👨‍💻', '🙂', '😉', '✌️']}
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
      <Pagination prevTo={ROUTE.portfolio} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
