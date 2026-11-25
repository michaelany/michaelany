import {Sections} from '#components/common'
import Greeting from './Greeting'
import Banner from './Banner'

interface IHomeProps {
  isStacked: boolean
}

export default function Home({isStacked}: IHomeProps) {
  return (
    <Sections
      firstSection={<Greeting />}
      secondSection={<Banner isStacked={isStacked} />}
    />
  )
}
