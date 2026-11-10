import {
  useEffect,
  useRef,
  useState,
  type KeyboardEventHandler,
  type RefObject,
} from 'react'
import {useTranslation} from 'react-i18next'
import type {TFunction} from 'i18next'
import {useInView} from 'react-intersection-observer'
import cn from 'clsx'
import {CircularProgress, Fab, Fade} from '@mui/material'
import {
  PauseRounded as PauseIcon,
  PlayArrowRounded as PlayIcon,
  ViewInArRounded as ControlIcon,
} from '@mui/icons-material'

import './Laptop.scss'
import FrameCorner from '#assets/img/shapes/frame-corner.svg?react'
import macbookImg from '#assets/img/shapes/macbook.png'
import macbook2xImg from '#assets/img/shapes/macbook@2x.png'
import {Tooltip} from '#components/common'
import {BANNER_IMAGES} from '#data/banner'
import {DURATION} from '#styles/theme'
import type {TLaptopScene} from '#utils/laptop/laptopScene'
import LaptopSpeedControl from './LaptopSpeedControl'

type TLaptopStatus = 'loading' | 'ready' | 'failed'

interface IStageProps {
  t: TFunction
  status: TLaptopStatus
  isLidOpen: boolean
  isManualControlEnabled: boolean
  canvasRef: RefObject<HTMLCanvasElement | null>
  interactionRef: RefObject<HTMLDivElement | null>
  lidHotspotRef: RefObject<HTMLButtonElement | null>
  onSceneEntered: () => void
  onInteractionKeyDown: KeyboardEventHandler<HTMLDivElement>
  onLidToggle: () => void
}

export default function Laptop() {
  const {t} = useTranslation()
  const [status, setStatus] = useState<TLaptopStatus>('loading')
  const [isLidOpen, setIsLidOpen] = useState(true)
  const [isManualControlEnabled, setIsManualControlEnabled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const {ref: containerRef, inView: isInView} = useInView({
    triggerOnce: true,
    rootMargin: '150px',
  })
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const interactionRef = useRef<HTMLDivElement>(null)
  const lidHotspotRef = useRef<HTMLButtonElement>(null)
  const sceneRef = useRef<TLaptopScene | null>(null)

  useEffect(() => {
    if (!isInView) return

    const canvas = canvasRef.current
    const interaction = interactionRef.current
    const lidHotspot = lidHotspotRef.current
    if (!canvas || !interaction || !lidHotspot) return

    const controller = new AbortController()
    const {signal} = controller

    const handleSceneError = () => {
      if (signal.aborted) return
      controller.abort()
      sceneRef.current = null
      setIsManualControlEnabled(false)
      setStatus('failed')
    }

    import('#utils/laptop/laptopScene')
      .then(async ({createLaptopScene}) => {
        if (signal.aborted) return
        const scene = await createLaptopScene({
          signal,
          canvas,
          interaction,
          lidHotspot,
          onError: handleSceneError,
          onPlayingChange: setIsPlaying,
        })
        if (signal.aborted) return
        sceneRef.current = scene
        setStatus('ready')
      })
      .catch(handleSceneError)

    return () => {
      controller.abort()
      sceneRef.current = null
    }
  }, [isInView])

  const handleSpeedChange = (speed: number) => {
    sceneRef.current?.setAnimationSpeed(speed)
    setAnimationSpeed(speed)
  }

  const handleLidToggle = () => {
    const isOpen = !isLidOpen
    sceneRef.current?.setIsLidOpen(isOpen)
    setIsLidOpen(isOpen)
  }

  const handleControlToggle = () => {
    const isEnabled = !isManualControlEnabled
    sceneRef.current?.setIsManualControlEnabled(isEnabled)
    setIsManualControlEnabled(isEnabled)
  }

  const handlePlaybackToggle = () => sceneRef.current?.setIsPlaying(!isPlaying)

  const handleSceneEntered = () => sceneRef.current?.start()

  const handleInteractionKeyDown: KeyboardEventHandler<HTMLDivElement> = e => {
    if (sceneRef.current?.handleKey(e.key)) e.preventDefault()
  }

  const isReady = status === 'ready'
  const isLoading = status === 'loading'

  return (
    <div
      ref={containerRef}
      className={cn('Laptop', isManualControlEnabled && 'Laptop_interactive')}
    >
      <div className="Laptop-Stage">
        <Fade unmountOnExit in={isLoading} timeout={DURATION.short}>
          <div className="Laptop-Poster" />
        </Fade>
        {isLoading && (
          <div className="Laptop-Loading">
            <CircularProgress
              color="inherit"
              aria-label={t('home.laptop.loading')}
            />
          </div>
        )}
        <Stage
          t={t}
          status={status}
          isLidOpen={isLidOpen}
          isManualControlEnabled={isManualControlEnabled}
          canvasRef={canvasRef}
          interactionRef={interactionRef}
          lidHotspotRef={lidHotspotRef}
          onSceneEntered={handleSceneEntered}
          onInteractionKeyDown={handleInteractionKeyDown}
          onLidToggle={handleLidToggle}
        />
      </div>
      <div className="Laptop-Controls">
        <Tooltip
          title={t(
            isManualControlEnabled
              ? 'home.laptop.disableControl'
              : 'home.laptop.enableControl'
          )}
        >
          <Fab
            className="Laptop-Control"
            disabled={!isReady}
            aria-label={t('home.laptop.control')}
            aria-pressed={isManualControlEnabled}
            onClick={handleControlToggle}
          >
            <ControlIcon />
          </Fab>
        </Tooltip>
        <Tooltip
          title={t(isPlaying ? 'home.laptop.pause' : 'home.laptop.play')}
        >
          <Fab
            className="Laptop-Control"
            disabled={!isReady}
            aria-label={t(
              isPlaying
                ? 'home.laptop.pauseAnimation'
                : 'home.laptop.playAnimation'
            )}
            onClick={handlePlaybackToggle}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </Fab>
        </Tooltip>
        <LaptopSpeedControl
          triggerClassName="Laptop-Control"
          t={t}
          animationSpeed={animationSpeed}
          isReady={isReady}
          onSpeedChange={handleSpeedChange}
        />
      </div>
    </div>
  )
}

const Stage = ({
  t,
  status,
  isLidOpen,
  isManualControlEnabled,
  canvasRef,
  interactionRef,
  lidHotspotRef,
  onSceneEntered,
  onInteractionKeyDown,
  onLidToggle,
}: IStageProps) => {
  if (status === 'failed')
    return (
      <div className="Laptop-Fallback">
        <div className="Laptop-FallbackFigure">
          <img
            className="Laptop-FallbackImage"
            width={652}
            height={417}
            src={macbookImg}
            srcSet={`${macbook2xImg} 2x`}
            alt="MacBook Pro"
            loading="lazy"
          />
          <img
            className="Laptop-FallbackScreen"
            src={BANNER_IMAGES[0]}
            alt="JavaScript"
          />
        </div>
      </div>
    )

  const isReady = status === 'ready'

  const interactionTabIndex = isReady && isManualControlEnabled ? 0 : -1

  return (
    <>
      <Fade in={isReady} timeout={DURATION.short} onEntered={onSceneEntered}>
        <canvas ref={canvasRef} className="Laptop-Canvas" aria-hidden="true" />
      </Fade>
      <div
        ref={interactionRef}
        className="Laptop-Interaction"
        tabIndex={interactionTabIndex}
        role="group"
        aria-label={t('home.laptop.label')}
        aria-hidden={!isReady}
        onKeyDown={onInteractionKeyDown}
      />
      {isReady && (
        <div className="Laptop-Frame" aria-hidden="true">
          {frameCorners.map(corner => (
            <FrameCorner key={corner} className="Laptop-FrameCorner" />
          ))}
        </div>
      )}
      <button
        ref={lidHotspotRef}
        className="Laptop-LidHotspot"
        type="button"
        hidden={!isReady}
        aria-label={t(isLidOpen ? 'home.laptop.close' : 'home.laptop.open')}
        aria-hidden={!isManualControlEnabled}
        tabIndex={interactionTabIndex}
        onClick={onLidToggle}
      >
        <span className="Laptop-LidHotspotMarker" />
      </button>
    </>
  )
}

const frameCorners = [0, 1, 2, 3]
