import React from 'react'

import Sections from '../_common/Sections'
import Bio from './Bio'
import Social from './Social'

export default function About() {
  return <Sections firstSection={<Bio />} secondSection={<Social />} />
}
