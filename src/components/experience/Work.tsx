import React from 'react'

import {Title} from '../../utils/enums'

export default function Work(): JSX.Element {
  return (
    <section className="Work Section">
      <h1 className="Title Title_color_violet">{Title.EXPERIENCE}</h1>
      <p className="MainText">
        <b>Живу и работаю в Москве. Профессионально занимаюсь фронтенд-разработкой более 4 лет.</b>
      </p>
    </section>
  )
}
