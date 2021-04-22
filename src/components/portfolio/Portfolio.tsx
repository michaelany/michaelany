import {useTranslation} from 'react-i18next'

import {Pagination, Copyright} from '../common'
import Projects from './Projects'
import {ROUTE} from '../../utils/constants'

export default function Portfolio(): JSX.Element {
  const {t} = useTranslation()

  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <h1 className="Title">{t('title.portfolio')}</h1>
        <Projects />
      </div>
      <Pagination prevTo={ROUTE.experience} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
