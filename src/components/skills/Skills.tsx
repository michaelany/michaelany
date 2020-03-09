import React from 'react'

import Sections from '../_common/Sections'
import Info from '../_common/Info'
import Technologies from './Technologies'
import {Title} from '../../utils/enums'

export default function Skills() {
  return (
    <Sections
      firstSection={
        <Info
          title={Title.SKILLS}
          mainText="Создаю веб-приложения на React. Бизнес-логику пишу на Redux"
          text="Мой технологический стек постоянно обновляется и пополняется. В основном читаю официальные документации по изучаемым технологиям, также справочники."
          features={[]}
          extraFeatures={[]}
          color="blue"
        />
      }
      secondSection={<Technologies />}
    />
  )
}
