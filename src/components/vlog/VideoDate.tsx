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

const getTimeSince = (date: Date, lng: TLng): string => {
  const currentDate = new Date()
  const days = differenceInDays(currentDate, date)
  const months = differenceInMonths(currentDate, date)
  const ruLng = lng === 'ru'
  if (months >= 12) {
    const years = months / 12
    return ruLng
      ? `${Math.floor(years)} год${Math.floor(years) % 10 === 1 && Math.floor(years) !== 11 ? '' : Math.floor(years) % 10 === 2 && Math.floor(years) !== 12 ? 'а' : 'ов'} назад`
      : `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''} ago`
  } else if (months > 0) {
    const russianMonthsEnding =
      months === 1 ? 'месяц' : months < 5 ? 'месяца' : 'месяцев'
    return ruLng
      ? `${months} ${russianMonthsEnding} назад`
      : `${months} month${months > 1 ? 's' : ''} ago`
  } else if (days > 0) {
    const russianDaysEnding =
      days === 1 || days === 21
        ? 'день'
        : days < 5 || (days > 21 && days < 25)
          ? 'дня'
          : 'дней'
    return ruLng
      ? `${days} ${russianDaysEnding} назад`
      : `${days} day${days > 1 ? 's' : ''} ago`
  } else return ruLng ? 'Сегодня' : 'Today'
}
