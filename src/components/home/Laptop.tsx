import {useEffect, useRef, useState} from 'react'
import type {ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import cn from 'clsx'
import {Fab} from '@mui/material'
import {
  KeyboardArrowDownRounded as CloseLidIcon,
  KeyboardArrowUpRounded as OpenLidIcon,
} from '@mui/icons-material'
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded'

import './Laptop.scss'
import {Tooltip} from '#components/common'
import type {LaptopScene} from './laptopScene'

interface ILaptopProps {
  fallback: ReactNode
}

export default function Laptop({fallback}: ILaptopProps) {
  const {t} = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const scene = useRef<LaptopScene | null>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [lidOpen, setLidOpen] = useState(true)
  const [manualControl, setManualControl] = useState(false)
  const lidAction = t(lidOpen ? 'home.laptop.close' : 'home.laptop.open')

  useEffect(() => {
    const element = container.current
    const surface = canvas.current
    if (!element || !surface) return

    let cancelled = false
    const controller = new AbortController()
    const fail = () => {
      if (cancelled) return
      scene.current?.dispose()
      scene.current = null
      setFailed(true)
      setReady(false)
    }
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return
        observer.disconnect()
        import('./laptopScene')
          .then(async ({createLaptopScene}) => {
            if (cancelled) return
            const nextScene = await createLaptopScene(
              surface,
              fail,
              controller.signal
            )
            if (cancelled) {
              nextScene.dispose()
              return
            }
            scene.current = nextScene
            setReady(true)
          })
          .catch(fail)
      },
      {rootMargin: '150px'}
    )
    observer.observe(element)

    return () => {
      cancelled = true
      controller.abort()
      observer.disconnect()
      scene.current?.dispose()
      scene.current = null
    }
  }, [])

  return (
    <div
      ref={container}
      className={cn(
        'Laptop',
        ready && 'Laptop_ready',
        manualControl && 'Laptop_interactive'
      )}
    >
      <div className="Laptop-Stage">
        {!ready && <div className="Laptop-Fallback">{fallback}</div>}
        {!failed && (
          <canvas
            ref={canvas}
            className="Laptop-Canvas"
            tabIndex={ready && manualControl ? 0 : -1}
            role="group"
            aria-label={t('home.laptop.label')}
            aria-hidden={!ready}
            onKeyDown={event => {
              if (scene.current?.handleKey(event.key)) event.preventDefault()
            }}
          />
        )}
        {ready && (
          <div className="Laptop-Controls">
            <Tooltip title={lidAction}>
              <Fab
                className="Laptop-Control Button Button_color_white"
                aria-label={lidAction}
                onClick={() => {
                  const open = !lidOpen
                  scene.current?.setLidOpen(open)
                  setLidOpen(open)
                }}
              >
                {lidOpen ? <CloseLidIcon /> : <OpenLidIcon />}
              </Fab>
            </Tooltip>
            <Tooltip
              title={t(
                manualControl
                  ? 'home.laptop.disableControl'
                  : 'home.laptop.enableControl'
              )}
            >
              <Fab
                className="Laptop-Control Button Button_color_white"
                aria-label={t('home.laptop.control')}
                aria-pressed={manualControl}
                onClick={() => {
                  const enabled = !manualControl
                  scene.current?.setManualControl(enabled)
                  setManualControl(enabled)
                }}
              >
                <ViewInArRoundedIcon />
              </Fab>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  )
}
