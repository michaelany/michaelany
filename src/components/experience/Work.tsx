import React from 'react'

import {Title} from '../../utils/enums'

export default function Work() {
  return (
    <section className="Work Section">
      <h1 className="Title Title_color_violet">{Title.EXPERIENCE}</h1>
    </section>
  )
}

/* Реализовал около{' '}
        <Link component={RouteLink} to={Route.PORTFOLIO}>
          20
        </Link>{' '}
        проектов (одностраничные приложения | многостраничные сайты | лендинги | админки | письма и модули), многие из
        которых написаны мною с нуля. */
