import {format, differenceInDays, differenceInMonths} from 'date-fns'
import cn from 'clsx'
import {EventRounded as EventIcon} from '@mui/icons-material'

import './VideoDate.scss'
import type {TLng} from '#utils/types'

interface IVideoDateProps {
  className?: string
  withIcon?: boolean
  date: Date
  lng: TLng
}

export default function VideoDate({
  className,
  withIcon,
  date,
  lng,
}: IVideoDateProps) {
  return (
    <p className={cn(className, 'VideoDate')}>
      {withIcon && <EventIcon className="VideoDate-Icon" />}
      <span>{format(date, 'dd.MM.yyyy')}</span>
      <span>•</span>
      <span>{getTimeSince(date, lng)}</span>
    </p>
  )
}

const relativeTimeFormatters: Record<TLng, Intl.RelativeTimeFormat> = {
  en: new Intl.RelativeTimeFormat('en'),
  ru: new Intl.RelativeTimeFormat('ru'),
}

const getTimeSince = (date: Date, lng: TLng): string => {
  const currentDate = new Date()
  const months = differenceInMonths(currentDate, date)
  if (months >= 12) {
    return relativeTimeFormatters[lng].format(-Math.floor(months / 12), 'year')
  }
  if (months > 0) {
    return relativeTimeFormatters[lng].format(-months, 'month')
  }
  const days = differenceInDays(currentDate, date)
  return days > 0
    ? relativeTimeFormatters[lng].format(-days, 'day')
    : lng === 'ru'
      ? 'Сегодня'
      : 'Today'
}
