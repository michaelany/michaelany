import {useTranslation} from 'react-i18next'
import {ChatRounded as ChatIcon} from '@material-ui/icons'

import './Portfolio.scss'
import {Pagination, Copyright, Tooltip} from '../common'
import Projects from './Projects'
import {ROUTE} from '../../utils/constants'

export default function Portfolio(): JSX.Element {
  const {t} = useTranslation()

  return (
    <section className="Portfolio Section Section_single Section_pagination">
      <div>
        <h1 className="Portfolio-Title Title">
          {t('title.portfolio')}{' '}
          <Tooltip title={t('portfolio.limit')!} enterDelay={0}>
            <span className="Portfolio-Icon">
              <ChatIcon />
            </span>
          </Tooltip>
        </h1>
        <Projects />
      </div>
      <Pagination prevTo={ROUTE.experience} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
