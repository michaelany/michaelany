import React from 'react'

import Sections from '../_common/Sections'
import Work from './Work'
import Steps from './Steps'

export default function Experience() {
  return <Sections firstSection={<Work />} secondSection={<Steps />} />
}
