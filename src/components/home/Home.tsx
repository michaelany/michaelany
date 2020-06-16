import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Sections from '../common/Sections'
import Greeting from './Greeting'
import Banner from './Banner'
import {BREAKPOINTS} from '../../styles/theme'

export default function Home(): JSX.Element {
  // matches for key to responsive alternate animations reset
  const md: boolean = useMediaQuery(`(max-width: ${BREAKPOINTS.md}px)`)

  return (
    <Sections
      key={String(md)}
      firstSection={<Greeting />}
      secondSection={<Banner />}
    />
  )
}
