import React from 'react'

import Sections from '../_common/Sections'
import Map from './Map'
import {Title} from '../../utils/enums'

export default function Contact(): JSX.Element {
  return (
    <Sections
      firstSection={
        <section className="Contact Section Section_type_single">
          <h1 className="Title Title_color_white">{Title.CONTACT}</h1>
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
