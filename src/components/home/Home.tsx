import React from 'react'

import Sections from '../_common/Sections'
import Greeting from './Greeting'
import Banner from './Banner'

export default function Home(): JSX.Element {
  return <Sections firstSection={<Greeting />} secondSection={<Banner />} />
}
