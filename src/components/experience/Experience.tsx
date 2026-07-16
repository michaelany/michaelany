import {Sections} from '#components/common'
import Work from './Work'
import Timeline from './Timeline'

export default function Experience() {
  return <Sections firstSection={<Work />} secondSection={<Timeline />} />
}
