import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'

import {BLANK_LINK_PROPS} from '../../utils/data'
import {ITechnology as ITechnologyProps} from '../../utils/types'

export default function Technology({label, href}: ITechnologyProps) {
  return (
    <ButtonBase {...BLANK_LINK_PROPS} component="a" href={href}>
      <figure>
        <img src="" alt={label} />
        <figcaption>{label}</figcaption>
      </figure>
    </ButtonBase>
  )
}
