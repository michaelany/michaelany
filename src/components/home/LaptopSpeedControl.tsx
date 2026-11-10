import {useEffect, useRef, useState} from 'react'
import type {TFunction} from 'i18next'
import {
  Button,
  ButtonGroup,
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
  triggerClassName: string
  t: TFunction
  animationSpeed: number
  isReady: boolean
  onSpeedChange: (speed: number) => void
}

export default function LaptopSpeedControl({
  triggerClassName,
  t,
  animationSpeed,
  isReady,
  onSpeedChange,
}: ILaptopSpeedControlProps) {
  const [isOpen, setIsOpen] = useState(false)
  const speedPanelRef = useRef<HTMLDivElement>(null)
  const speedButtonRef = useRef<HTMLButtonElement>(null)

  const isSpeedPanelOpen = isReady && isOpen

  useEffect(() => {
    if (!isSpeedPanelOpen) return

    const handleSpeedPanelKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setIsOpen(false)
      if (speedPanelRef.current?.contains(document.activeElement))
        speedButtonRef.current?.focus()
    }
    document.addEventListener('keydown', handleSpeedPanelKeyDown)
    return () =>
      document.removeEventListener('keydown', handleSpeedPanelKeyDown)
  }, [isSpeedPanelOpen])

  const handleSpeedToggle = () => setIsOpen(isOpen => !isOpen)

  const handleSpeedClose = () => setIsOpen(false)

  const speedLabel = t('home.laptop.animationSpeed')

  return (
    <ClickAwayListener onClickAway={handleSpeedClose}>
      <div className="LaptopSpeedControl">
        <Tooltip title={speedLabel}>
          <Fab
            ref={speedButtonRef}
            className={triggerClassName}
            disabled={!isReady}
            aria-label={speedLabel}
            aria-haspopup="dialog"
            aria-expanded={isSpeedPanelOpen}
            onClick={handleSpeedToggle}
          >
            <SpeedIcon />
          </Fab>
        </Tooltip>
        <Popper
          className="LaptopSpeedControl-Popper"
          disablePortal
          transition
          open={isSpeedPanelOpen}
          anchorEl={speedButtonRef.current}
          placement="top"
          role="presentation"
          modifiers={speedPopoverModifiers}
        >
          {({TransitionProps}) => (
            <Fade
              {...TransitionProps}
              timeout={DURATION.short}
              style={{pointerEvents: isSpeedPanelOpen ? 'auto' : 'none'}}
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
                <Stack spacing={2} sx={{flexWrap: 'nowrap'}}>
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
                <ButtonGroup
                  className="LaptopSpeedControl-Presets"
                  fullWidth
                  color="inherit"
                  aria-label={speedLabel}
                >
                  {speedOptions.presets.map(speed => (
                    <Button key={speed} onClick={() => onSpeedChange(speed)}>
                      {speed}
                    </Button>
                  ))}
                </ButtonGroup>
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
  {name: 'preventOverflow', options: {padding: 16}},
]
