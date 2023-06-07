import {useTranslation} from 'react-i18next'
import {ChatRounded as ChatIcon} from '@material-ui/icons'
import {Tooltip} from '@material-ui/core'

import './Portfolio.scss'
import {Pagination, Copyright} from '@components/common'
import {ROUTE} from '@utils/constants'
import {DURATION} from '@styles/theme'
import Projects from './Projects'

export default function Portfolio() {
  const {t} = useTranslation()

  return (
    <section className="Portfolio Section Section_single Section_pagination">
      <div>
        <h1 className="Portfolio-Title Title">
          {t('title.portfolio')}
          {import.meta.env.VITE_SHOW_PRIVATE_PROJECTS !== 'true' && (
            <Tooltip
              title={t('portfolio.limit')}
              enterDelay={0}
              enterTouchDelay={0}
              leaveTouchDelay={DURATION.lingering}
            >
              <div className="Portfolio-IconWrapper">
                <ChatIcon />
              </div>
            </Tooltip>
          )}
        </h1>
        <Projects />
      </div>
      <Pagination prevTo={ROUTE.experience} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
