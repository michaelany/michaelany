import React from 'react'

import Sections from '../_common/Sections'
import Pagination from '../_common/Pagination'
import ContactForm from './ContactForm'
import Map from './Map'
import {Path, Title} from '../../utils/enums'

export default function Contact(): JSX.Element {
  return (
    <Sections
      firstSection={
        <section className="Section Section_type_pagination">
          <div>
            <h1 className="Title Title_color_white">{Title.CONTACT}</h1>
            <p className="MainText MainText_light">
              Вам нужна моя помощь или у вас есть ко мне вопросы? Заполните
              форму и нажмите "Отправить".
            </p>
            <ContactForm />
          </div>
          <Pagination prevTo={Path.PORTFOLIO} />
        </section>
      }
      secondSection={
        <div className="Sections-Map">
          <Map />
        </div>
      }
    />
  )
}
