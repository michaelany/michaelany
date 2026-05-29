import {useState, useEffect, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import cn from 'clsx'

import './Banner.scss'
import macbookImg from '#assets/img/shapes/macbook.png'
import macbook2xImg from '#assets/img/shapes/macbook@2x.png'
import jsImg from '#assets/img/main-technologies/js.svg'
import tsImg from '#assets/img/main-technologies/ts.svg'
import reactImg from '#assets/img/main-technologies/react.svg'
import vueImg from '#assets/img/main-technologies/vue.svg'
import htmlImg from '#assets/img/main-technologies/html.svg'
import cssImg from '#assets/img/main-technologies/css.svg'
import sassImg from '#assets/img/main-technologies/sass.svg'
import tailwindImg from '#assets/img/main-technologies/tailwind.svg'
import muiImg from '#assets/img/main-technologies/mui.svg'
import gitImg from '#assets/img/main-technologies/git.svg'
import npmImg from '#assets/img/main-technologies/npm.svg'
import bunImg from '#assets/img/main-technologies/bun.svg'
import babelImg from '#assets/img/main-technologies/babel.svg'
import nodeImg from '#assets/img/main-technologies/node.svg'
import vscodeImg from '#assets/img/main-technologies/vscode.svg'
import claudeImg from '#assets/img/main-technologies/claude.svg'
import claudecodeImg from '#assets/img/main-technologies/claudecode.svg'
import gptImg from '#assets/img/main-technologies/gpt.svg'
import codexImg from '#assets/img/main-technologies/codex.svg'
import figmaImg from '#assets/img/main-technologies/figma.svg'
import sketchImg from '#assets/img/main-technologies/sketch.png'
import finalcutImg from '#assets/img/main-technologies/finalcut.png'
import {Animate, Tilt, Section} from '#components/common'
import {ROUTE} from '#utils/constants'
import {DURATION} from '#styles/theme'

export default function Banner() {
  const {t} = useTranslation()

  return (
    <Section aside colorful centeredContent nextTo={ROUTE.about}>
      <h2 className="VisuallyHidden">{t('home.subtitle')}</h2>
      <div className="Banner-Content">
        <Animate effect="zoomIn" duration="longest" easing="out">
          <Tilt
            el="figure"
            className="Banner-Figure"
            speed={DURATION.lingering}
          >
            <MacScreen />
          </Tilt>
        </Animate>
      </div>
    </Section>
  )
}

const MacScreen = () => {
  const [show, setShow] = useState(0)
  const timer = useRef<any>(null)

  useEffect(() => {
    const handleAutoShowSet = () => {
      setShow(show => (show < images.length - 1 ? show + 1 : 0))
      timer.current = setTimeout(handleAutoShowSet, DURATION.longest)
    }
    timer.current = setTimeout(handleAutoShowSet, DURATION.longest)
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <>
      <img
        className="Banner-Image"
        width={652}
        height={417}
        src={macbookImg}
        srcSet={`${macbook2xImg} 2x`}
        alt="MacBook Pro"
        loading="lazy"
      />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={cn(
            'Banner-ScreenImage',
            index === show && 'Banner-ScreenImage_show'
          )}
          alt={`Screen technology ${index}`}
          loading="lazy"
        />
      ))}
    </>
  )
}

const images = [
  jsImg,
  tsImg,
  reactImg,
  vueImg,
  htmlImg,
  cssImg,
  sassImg,
  tailwindImg,
  muiImg,
  gitImg,
  npmImg,
  bunImg,
  babelImg,
  nodeImg,
  vscodeImg,
  claudeImg,
  claudecodeImg,
  gptImg,
  codexImg,
  figmaImg,
  sketchImg,
  finalcutImg,
]
