import {useTranslation} from 'react-i18next'
import {Avatar, Chip, Link, Stack} from '@mui/material'
import WebRoundedIcon from '@mui/icons-material/WebRounded'
import {
  CalendarMonthRounded as CalendarIcon,
  WebAssetRounded as LandingIcon,
  AppsRounded as AppIcon,
  SpaceDashboardRounded as AdminIcon,
  PhoneIphoneRounded as MobileAppIcon,
} from '@mui/icons-material'

import './ProjectDetails.scss'
import {Company, Section, Animate} from '#components/common'
import {COMPANY} from '#data/common'
import TECHNOLOGIES from '#data/technologies'
import {BLANK_LINK_PROPS} from '#utils/constants'
import ProjectActions from './ProjectActions'
import type {IProject, ITechnology} from '#utils/types'

interface IProjectDetailsProps {
  project: IProject
}

export default function ProjectDetails({project}: IProjectDetailsProps) {
  const {t} = useTranslation()

  const technologies: ITechnology[] = project.tools.map(
    tool => TECHNOLOGIES.find(item => item.name === tool) as ITechnology
  )
  const projectKey = `portfolio.project.${project.name}`
  const company = COMPANY[project.companyName]

  return (
    <Section>
      <div className="ProjectDetails-Block">
        <h1 className="Title Title_smallIndent">
          {project.title ?? t(`${projectKey}.title`)}
        </h1>
        <Company animated {...company} />
      </div>
      <p className="MainText MainText_smallIndent">
        {t(`${projectKey}.text`, {replace: project.textValues})}.{' '}
        {t('portfolio.developed')}{' '}
        <Link {...BLANK_LINK_PROPS} className="Link" href={company.href}>
          {company.title}
        </Link>
        .
      </p>
      <Stack component="ul" className="ProjectDetails-Features">
        <Chip
          component="li"
          className={`Chip Chip_color_${project.color}`}
          icon={<CalendarIcon />}
          label={<time dateTime={`${project.year}`}>{project.year}</time>}
        />
        {project.types.map(type => {
          const Icon = project.mobileApp
            ? MobileAppIcon
            : PROJECT_TYPE_ICONS[type]

          return (
            <Chip
              key={type}
              component="li"
              className={`Chip Chip_color_${project.color}`}
              icon={<Icon />}
              label={
                project.mobileApp
                  ? t('portfolio.mobileApp')
                  : t(`portfolio.filter.${type}`)
              }
            />
          )
        })}
      </Stack>
      <Animate el="p" className="ProjectDetails-Text">
        {t(`${projectKey}.description`, {
          replace: project.descriptionValues,
        })}
        .
      </Animate>
      <Animate>
        <Stack component="ul">
          {technologies.map(technology => (
            <Chip
              key={technology.name}
              component="li"
              className={`Chip Chip_color_${technology.color}`}
              avatar={
                <Avatar src={technology.images[0]} alt={technology.label} />
              }
              label={technology.label}
            />
          ))}
        </Stack>
      </Animate>
      <ProjectActions
        url={project.url}
        details={project.details}
        stores={project.stores}
        companyName={project.companyName}
      />
    </Section>
  )
}

const PROJECT_TYPE_ICONS = {
  site: WebRoundedIcon,
  landing: LandingIcon,
  app: AppIcon,
  admin: AdminIcon,
}
