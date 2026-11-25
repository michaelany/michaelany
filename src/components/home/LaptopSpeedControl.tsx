import {useEffect, useRef, type RefObject} from 'react'
import type {TFunction} from 'i18next'
import {
  Button,
  ClickAwayListener,
  Fab,
  Fade,
  IconButton,
  Paper,
  Popper,
  Slider,
  Stack,
  type PopperProps,
} from '@mui/material'
import {
  AddRounded as AddIcon,
  RemoveRounded as RemoveIcon,
  SpeedRounded as SpeedIcon,
} from '@mui/icons-material'

import './LaptopSpeedControl.scss'
import {Tooltip} from '#components/common'
import {DURATION} from '#styles/tokens'

interface ILaptopSpeedControlProps {
  anchorRef: RefObject<HTMLDivElement | null>
  triggerClassName: string
  t: TFunction
  animationSpeed: number
  isReady: boolean
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onSpeedChange: (speed: number) => void
}

export default function LaptopSpeedControl({
  anchorRef,
  triggerClassName,
  t,
  animationSpeed,
  isReady,
  isOpen,
  onOpenChange,
  onSpeedChange,
}: ILaptopSpeedControlProps) {
  const speedPanelRef = useRef<HTMLDivElement>(null)
  const speedButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleSpeedPanelKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      onOpenChange(false)
      if (speedPanelRef.current?.contains(document.activeElement))
        speedButtonRef.current?.focus()
    }
    document.addEventListener('keydown', handleSpeedPanelKeyDown)
    return () =>
      document.removeEventListener('keydown', handleSpeedPanelKeyDown)
  }, [isOpen, onOpenChange])

  const handleSpeedToggle = () => onOpenChange(!isOpen)

  const handleSpeedClose = () => onOpenChange(false)

  const speedLabel = t('home.laptop.animationSpeed')

  return (
    <ClickAwayListener onClickAway={handleSpeedClose}>
      <div className="LaptopSpeedControl">
        <Tooltip title={isOpen ? '' : speedLabel}>
          <Fab
            ref={speedButtonRef}
            className={triggerClassName}
            disabled={!isReady}
            aria-label={speedLabel}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            onClick={handleSpeedToggle}
          >
            <SpeedIcon />
          </Fab>
        </Tooltip>
        <Popper
          className="LaptopSpeedControl-Popper"
          disablePortal
          transition
          open={isOpen}
          anchorEl={anchorRef.current}
          placement="top"
          role="presentation"
          modifiers={speedPopoverModifiers}
        >
          {({TransitionProps}) => (
            <Fade
              {...TransitionProps}
              timeout={DURATION.short}
              style={{pointerEvents: isOpen ? 'auto' : 'none'}}
            >
              <Paper
                ref={speedPanelRef}
                className="LaptopSpeedControl-Panel"
                role="dialog"
                aria-label={speedLabel}
              >
                <output className="LaptopSpeedControl-Value">
                  {formatSpeed(animationSpeed)}
                </output>
                <Stack className="LaptopSpeedControl-Row">
                  <IconButton
                    className="LaptopSpeedControl-Adjust"
                    aria-label={t('home.laptop.slowDownAnimation')}
                    disabled={animationSpeed <= speedOptions.min}
                    onClick={() =>
                      onSpeedChange(animationSpeed - speedOptions.step)
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Slider
                    aria-label={speedLabel}
                    min={speedOptions.min}
                    max={speedOptions.max}
                    step={speedOptions.step}
                    value={animationSpeed}
                    getAriaValueText={formatSpeed}
                    onChange={(_, value) => onSpeedChange(value)}
                  />
                  <IconButton
                    className="LaptopSpeedControl-Adjust"
                    aria-label={t('home.laptop.speedUpAnimation')}
                    disabled={animationSpeed >= speedOptions.max}
                    onClick={() =>
                      onSpeedChange(animationSpeed + speedOptions.step)
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </Stack>
                <div
                  className="LaptopSpeedControl-Presets"
                  role="group"
                  aria-label={speedLabel}
                >
                  {speedOptions.presets.map(speed => (
                    <Button
                      key={speed}
                      className="LaptopSpeedControl-Preset"
                      variant="outlined"
                      color="inherit"
                      onClick={() => onSpeedChange(speed)}
                    >
                      {speed}
                    </Button>
                  ))}
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  )
}

const formatSpeed = (speed: number) => `${speed.toFixed(2)}x`

const speedOptions = {
  min: 0.25,
  max: 4,
  step: 0.25,
  presets: [1, 1.25, 1.5, 2, 3],
}

const speedPopoverModifiers: PopperProps['modifiers'] = [
  {name: 'offset', options: {offset: [0, 12]}},
  {name: 'preventOverflow', options: {padding: 16, altAxis: true}},
]
