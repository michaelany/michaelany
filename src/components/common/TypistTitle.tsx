import React from 'react'
import cn from 'clsx'
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
      <h1 className={cn('Title', smallIndent && 'Title_smallIndent')}>
        {title}
      </h1>
    </Typist>
  )
}
