import {Pagination, Copyright} from '../common'
import Projects from './Projects'
import {ROUTE} from '../../utils/constants'
import {TITLE} from '../../data/common'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Section Section_single Section_pagination">
      <div>
        <h1 className="Title">{TITLE.portfolio}</h1>
        {/* <Projects /> */}
      </div>
      <Pagination prevTo={ROUTE.experience} nextTo={ROUTE.contact} />
      <Copyright />
    </section>
  )
}
