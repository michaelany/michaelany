import {useMediaQuery} from '@material-ui/core'

import {Sections} from '@components/common'
import {QUERY_BREAKPOINT} from '@utils/constants'
import Greeting from './Greeting'
import Banner from './Banner'

export default function Home() {
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
