import React from 'react'

import Sections from '../_common/Sections'
import Abilities from './Abilities'
import Technologies from './Technologies'

export default function Skills() {
  return <Sections firstSection={<Abilities />} secondSection={<Technologies />} />
}
