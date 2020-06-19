import React from 'react'
import cn from 'classnames'
import Typist from 'react-typist'

import './TypistTitle.scss'
import {TYPIST_PROPS} from '../../utils/constants'

interface TypistTitleProps {
  smallIndent?: boolean
  title: string
}

export default function TypistTitle({smallIndent, title}: TypistTitleProps) {
  return (
    <Typist {...TYPIST_PROPS} className="TypistTitle">
      <h1 className={cn('Title', {Title_smallIndent: smallIndent})}>{title}</h1>
    </Typist>
  )
}
