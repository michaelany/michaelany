import cn from 'clsx'
import {TFunction} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Grid, ButtonBase} from '@material-ui/core'

import './ProjectLink.scss'
import {Animate, Tilt, Panel} from '../common'
import {getListDelay, tProjectTypes} from '../../utils/helpers'
import {
  DETECT,
  ROUTE,
  TILT_SCALE,
  PROJECT_ROUTE,
  PATH_COLOR,
} from '../../utils/constants'
import {
  Effect,
  ProjectName,
  ProjectType,
  CompanyName,
  TiltOptions,
  Width,
} from '../../utils/types'
import {DURATION} from '../../styles/theme'
import {COMPANY} from '../../data/common'

interface ProjectLinkProps {
  t: TFunction
  index: number
  width: Width
  name: ProjectName
  types: ProjectType[]
  companyName: CompanyName
}

const tiltOptions: TiltOptions = {
  max: DETECT.safari ? 0 : 20,
  scale: TILT_SCALE,
  speed: DURATION.longest,
}

const randomEffects: Effect[] = ['top', 'right', 'bottom', 'left']

const getDelay = (index: number, width: Width): number => {
  if (width.sm) return 0
  const divider = width.md ? 2 : width.lg ? 3 : 4
  return getListDelay(index % divider)
}

export default function ProjectLink({
  t,
  index,
  width,
  name,
  types,
  companyName,
}: ProjectLinkProps): JSX.Element {
  const path = PROJECT_ROUTE[name]
  const company = COMPANY[companyName]

  return (
    <Grid
      item
      component="li"
      className="ProjectLink"
      xs={12}
      md={6}
      lg={4}
      xl={3}
    >
      <Animate
        className={cn(DETECT.mobile && 'ProjectLink-Tilt')}
        effect={
          width.sm ? undefined : randomEffects[Math.floor(Math.random() * 4)]
        }
        delay={getDelay(index, width)}
      >
        <Tilt el="div" className="ProjectLink-Tilt" options={tiltOptions}>
          <ButtonBase
            focusRipple
            component={Link}
            className={`ProjectLink-Item ColorInteract ColorInteract_color_${PATH_COLOR[path]}`}
            to={`${ROUTE.portfolio}${path}`}
          >
            <Panel
              className={`ProjectLink-View ProjectLink-View_name_${name}`}
            />
            <div className="ProjectLink-Content">
              <img
                className="ProjectLink-Company"
                src={company.images[0]}
                srcSet={`${company.images[1]} 2x`}
                alt={company.title}
              />
              <h3 className="ProjectLink-Title">
                {t(`portfolio.project.${name}.title`)}
              </h3>
              <p className="ProjectLink-Label">{tProjectTypes(t, types)}</p>
            </div>
          </ButtonBase>
        </Tilt>
      </Animate>
    </Grid>
  )
}
