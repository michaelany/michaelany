import {useTranslation} from 'react-i18next'
import cn from 'clsx'
import {Button} from '@mui/material'
import {ExpandMoreRounded as ExpandMoreIcon} from '@mui/icons-material'
import {UnfoldMoreRounded as UnfoldMoreIcon} from '@mui/icons-material'
import {UnfoldLessRounded as UnfoldLessIcon} from '@mui/icons-material'

import './ExpandAction.scss'
import Animate from './Animate'

interface IExpandActionProps {
  type?: 'first' | 'second'
  isWhite?: boolean
  expanded: boolean
  onToggle: () => void
}

export default function ExpandAction({
  type = 'first',
  isWhite = false,
  expanded,
  onToggle,
}: IExpandActionProps) {
  const {t} = useTranslation()

  const isFirstType = type === 'first'

  return (
    <Animate
      className={cn('Actions Actions_center', !isFirstType && 'Actions_second')}
      effect="bottom"
    >
      <Button
        className="Button"
        variant="outlined"
        color={isWhite ? 'info' : undefined}
        endIcon={
          isFirstType ? (
            <ExpandMoreIcon
              className={cn(
                'ExpandAction-Icon',
                expanded && 'ExpandAction-Icon_open'
              )}
            />
          ) : expanded ? (
            <UnfoldLessIcon />
          ) : (
            <UnfoldMoreIcon />
          )
        }
        onClick={onToggle}
      >
        {t(
          isFirstType
            ? 'other.more'
            : expanded
              ? 'other.collapse'
              : 'other.expand'
        )}
      </Button>
    </Animate>
  )
}
