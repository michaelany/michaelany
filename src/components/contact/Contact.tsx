import React from 'react'

import {Title} from '../../utils/enums'

export default function Contact(): JSX.Element {
  return (
    <section className="Contact Section Section_type_single">
      <h1 className="Title Title_color_white">{Title.CONTACT}</h1>
    </section>
  )
}
