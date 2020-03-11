import React from 'react'

import {Title} from '../../utils/enums'

export default function Portfolio(): JSX.Element {
  return (
    <section className="Portfolio Section Section_single">
      <h1 className="Title Title_color_white">{Title.PORTFOLIO}</h1>
    </section>
  )
}
