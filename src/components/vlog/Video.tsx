import {Navigate, useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import './Video.scss'
import {Panel, Animate, Section} from '#components/common'
import VIDEOS from '#data/videos'
import {ROUTE} from '#utils/constants'
import {TLng} from '#utils/types'
import VideoDate from './VideoDate'

export default function Video() {
  const params = useParams()
  const {t, i18n} = useTranslation()

  const video = VIDEOS.find((video) => video.name === params.video)

  if (!video) return <Navigate to={ROUTE.vlog} replace={true} />

  const videoKey = `vlog.video.${video.name}`

  return (
    <Section prevTo={ROUTE.vlog}>
      <div className="Video-Content">
        <div className="Video-Player">
          <Panel className="Video-Panel">
            <iframe
              allowFullScreen
              className="Video-Frame"
              src={video.src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            />
          </Panel>
        </div>
        <h1 className="Title Title_fadeInBottom Title_mediumIndent">
          {t(`${videoKey}.title`, {replace: ['|']})}
        </h1>
        <Animate el="p" className="Video-Text Text">
          {t(
            `${videoKey}.text`,
            video.textValues ? {replace: video.textValues} : undefined
          )}
          .
        </Animate>
        <Animate>
          <VideoDate withIcon date={video.date} lng={i18n.language as TLng} />
        </Animate>
      </div>
    </Section>
  )
}
