import {useTranslation} from 'react-i18next'

import {Pagination, Copyright} from '@components/common'
import {ROUTE} from '@utils/constants'
import Videos from './Videos'

export default function Vlog() {
  const {t} = useTranslation()

  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <h1 className="Title">{t('title.vlog')}</h1>
        <Videos />
      </div>
      <Pagination prevTo={ROUTE.portfolio} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
