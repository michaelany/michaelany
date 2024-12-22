import {useMediaQuery} from '@mui/material'

import ReactSnowfall from 'react-snowfall'
import {QUERY_BREAKPOINT} from '#utils/constants'
import {BREAKPOINT} from '#styles/theme'

interface ISnowfallProps {
  type?: TPositionType
}

type TPositionType = 'absolute' | 'fixed'

export default function Snowfall({type = 'fixed'}: ISnowfallProps) {
  const xs = useMediaQuery(QUERY_BREAKPOINT.xs)
  const sm = useMediaQuery(QUERY_BREAKPOINT.sm)
  const md = useMediaQuery(QUERY_BREAKPOINT.md)
  const lg = useMediaQuery(QUERY_BREAKPOINT.lg)

  const snowflakeCount = Math.round(
    (xs
      ? BREAKPOINT.xs
      : sm
        ? BREAKPOINT.sm
        : md
          ? BREAKPOINT.md
          : lg
            ? BREAKPOINT.lg
            : 1600) / 4
  )

  const style =
    type === 'fixed'
      ? {
          position: 'fixed' as TPositionType,
          width: '100dvw',
          height: '100dvh',
        }
      : undefined

  return (
    <ReactSnowfall
      snowflakeCount={snowflakeCount}
      color="rgba(255, 255, 255, 0.75)"
      style={style}
    />
  )
}
