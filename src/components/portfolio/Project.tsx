import {useState} from 'react'
import SwiperCore from 'swiper'
import {useTranslation, TFunction} from 'react-i18next'
import {RouteChildrenProps, Redirect} from 'react-router-dom'

import {Sections, Pagination, Copyright} from '../common'
import ProjectDetails from './ProjectDetails'
import Carousel from './Carousel'
import {ROUTE, PROJECT_ROUTE} from '../../utils/constants'
import {Project as ProjectInterface} from '../../utils/types'
import PROJECTS from '../../data/projects'

interface ProjectParams {
  project: string
}

interface ScreenshotsProps {
  t: TFunction
  project: ProjectInterface
}

const Screenshots = ({t, project}: ScreenshotsProps): JSX.Element => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperCore | null>(null)
  const [secondSwiper, setSecondSwiper] = useState<SwiperCore | null>(null)

  return (
    <div>
      {project.images.desktop && (
        <Carousel
          t={t}
          name={project.name}
          images={project.images.desktop}
          swiper={secondSwiper}
          setSwiper={setFirstSwiper}
        />
      )}
      {project.images.mobile && (
        <Carousel
          mobile
          t={t}
          name={project.name}
          images={project.images.mobile}
          swiper={firstSwiper}
          setSwiper={setSecondSwiper}
        />
      )}
    </div>
  )
}

export default function Project({
  match,
}: RouteChildrenProps<ProjectParams>): JSX.Element {
  const {t} = useTranslation()
  const project: ProjectInterface | undefined = PROJECTS.find(
    (project: ProjectInterface): boolean =>
      PROJECT_ROUTE[project.name].slice(1) === match!.params.project
  )

  if (!project) return <Redirect to={ROUTE.portfolio} />

  return (
    <Sections
      firstSection={
        <ProjectDetails
          name={project.name}
          title={project.title}
          textValues={project.textValues}
          companyName={project.companyName}
          types={project.types}
          features={project.features}
          url={project.url}
          details={project.details}
        />
      }
      secondSection={
        <section className="Section Section_pagination Section_colorful">
          <h2 className="VisuallyHidden">{t('portfolio.subtitle')}</h2>
          <Screenshots t={t} project={project} />
          <Pagination prevTo={ROUTE.portfolio} />
          <Copyright />
        </section>
      }
    />
  )
}
