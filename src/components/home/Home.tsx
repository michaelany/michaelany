import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Sections from '../_common/Sections'
import Greeting from './Greeting'
import Banner from './Banner'
import {BREAKPOINTS} from '../../styles/theme'

export default function Home(): JSX.Element {
  // matches for key to responsive alternate animations reset
  const matches: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.MD}px)`)

  return (
    <Sections
      key={String(matches)}
      firstSection={<Greeting />}
      secondSection={<Banner />}
    />
  )
}
