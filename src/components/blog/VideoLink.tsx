import type {TFunction} from 'i18next'

import './VideoLink.scss'
import CardLink from '#components/common/CardLink'
import {ROUTE} from '#utils/constants'
import VideoDate from './VideoDate'
import type {IWidth, TLng, IVideo} from '#utils/types'

interface IVideoLinkProps {
  t: TFunction
  lng: TLng
  index: number
  width: IWidth
  video: IVideo
}

export default function VideoLink({
  t,
  lng,
  index,
  width,
  video,
}: IVideoLinkProps) {
  return (
    <CardLink
      to={`${ROUTE.blog}/${video.name}`}
      title={t(`blog.video.${video.name}.title`, {replace: ['|']})}
      color={video.color}
      index={index}
      width={width}
      viewClassName={`VideoLink-View VideoLink-View_name_${video.name}`}
    >
      <VideoDate className="VideoLink-Date" date={video.date} lng={lng} />
    </CardLink>
  )
}
