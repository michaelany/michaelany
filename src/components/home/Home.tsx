import React from 'react'
import {useMediaQuery} from '@material-ui/core'

import {Sections} from '../common'
import Greeting from './Greeting'
import Banner from './Banner'
import {QUERY_BREAKPOINT} from '../../utils/constants'

export default function Home(): JSX.Element {
  // matches for key to responsive alternate animations reset
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md)

  return (
    <Sections
      key={String(md)}
      firstSection={<Greeting />}
      secondSection={<Banner />}
    />
  )
}
