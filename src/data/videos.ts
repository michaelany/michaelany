import {VIDEO_COLORS} from './contentColors'
import type {IVideo} from '#utils/types'

const videoDetails: Record<
  keyof typeof VIDEO_COLORS,
  Omit<IVideo, 'name' | 'color'>
> = {
  'day-in-a-life-montenegro': {
    date: new Date(2023, 1, 27),
    src: 'https://youtube.com/embed/b0bxdqMqGKo?si=dqAMSU_WP7iA8nI5',
  },
  'my-dreamdesk': {
    date: new Date(2023, 6, 4),
    src: 'https://youtube.com/embed/pQzEh3D6lHg?si=55gcsn4QUwxmyvN0',
  },
  'day-in-a-life-new-zealand': {
    date: new Date(2023, 7, 3),
    src: 'https://youtube.com/embed/x5ZtJo-eLA8?si=bDNiGWFJbpL18xlx',
    textValues: ['GoPro'],
  },
  'how-i-became-software-engineer': {
    date: new Date(2024, 1, 21),
    src: 'https://youtube.com/embed/TXKpsdQBBEA?si=lrSG9ZoPiKX8cKCQ',
    textValues: ['IT'],
  },
}

const VIDEOS: IVideo[] = (
  Object.keys(videoDetails) as (keyof typeof videoDetails)[]
).map(name => ({
  name,
  color: VIDEO_COLORS[name],
  ...videoDetails[name],
}))

export default VIDEOS
