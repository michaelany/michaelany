import React from 'react'

import Sections from '../_common/Sections'
import Work from './Work'
import Steps from './Steps'

export default function Experience(): JSX.Element {
  return <Sections firstSection={<Work />} secondSection={<Steps />} />
}
