import {IVideo} from '#utils/types'

const VIDEOS: IVideo[] = [
  {
    name: 'day-in-a-life-montenegro',
    color: 'yellow',
    date: new Date(2023, 1, 27),
    src: 'https://youtube.com/embed/b0bxdqMqGKo?si=dqAMSU_WP7iA8nI5',
  },
  {
    name: 'my-dreamdesk',
    color: 'default',
    date: new Date(2023, 6, 4),
    src: 'https://youtube.com/embed/pQzEh3D6lHg?si=55gcsn4QUwxmyvN0',
  },
  {
    name: 'day-in-a-life-new-zealand',
    color: 'blue',
    date: new Date(2023, 7, 3),
    src: 'https://youtube.com/embed/x5ZtJo-eLA8?si=bDNiGWFJbpL18xlx',
    textValues: ['GoPro'],
  },
  {
    name: 'how-i-became-software-engineer',
    color: 'red',
    date: new Date(2024, 1, 21),
    src: 'https://youtube.com/embed/TXKpsdQBBEA?si=lrSG9ZoPiKX8cKCQ',
    textValues: ['IT'],
  },
]

export default VIDEOS
