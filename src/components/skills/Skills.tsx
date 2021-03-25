import React, {useState, useRef, useMemo} from 'react'
import Link from '@material-ui/core/Link'
import {ButtonBaseActions} from '@material-ui/core/ButtonBase'
import ThumbUpIcon from '@material-ui/icons/ThumbUpRounded'
import SpeedIcon from '@material-ui/icons/SpeedRounded'
import BuildIcon from '@material-ui/icons/BuildRounded'
import AccountTreeIcon from '@material-ui/icons/AccountTreeRounded'
import BrushIcon from '@material-ui/icons/BrushRounded'
import DevicesOtherIcon from '@material-ui/icons/DevicesOtherRounded'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserRounded'
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendlyRounded'
import ListAltIcon from '@material-ui/icons/ListAltRounded'
import LoopIcon from '@material-ui/icons/LoopRounded'
import PaletteIcon from '@material-ui/icons/PaletteRounded'
import ExtensionIcon from '@material-ui/icons/ExtensionRounded'

import {Sections, Info} from '../common'
import Technologies from './Technologies'
import {scrollToView} from '../../utils/helpers'
import {Feature, TechnologyGroup} from '../../utils/types'
import {TECHNOLOGY_TITLE, TITLE, TECHNOLOGY_GROUPS} from '../../data/common'

const initialExpanded = [TECHNOLOGY_GROUPS[0].title]

export default function Skills(): JSX.Element {
  const [expanded, setExpanded] = useState<string[]>(initialExpanded)
  const sectionRef = useRef<HTMLElement>(null)
  const firstTechnologyActionRef = useRef<ButtonBaseActions>(null)

  const features: Feature[] = useMemo(
    () => [
      {
        label: 'Создаю надежный и правильно работающий интерфейс',
        Icon: VerifiedUserIcon,
        description:
          'Реализую систему всех возможных элементов интерфейса с удобным взаимодействием и продуманной бизнес-логикой. Забочусь о кроссбраузерности, безопасности и обрабатываю возможные ошибки.',
      },
      {
        label: 'Пишу современный и производительный код',
        Icon: SpeedIcon,
        description: `Использую стандарты ES6-ES11, ${TECHNOLOGY_TITLE.ts} 4, ${TECHNOLOGY_TITLE.react} Hooks, CSS Grid... Оптимизирую тяжелые вычисления. Избегаю лишних операций и утечек памяти. Применяю техники повышения производительности.`,
      },
      {
        label: 'Выбираю простой и эффективный способ решения задачи',
        Icon: ThumbUpIcon,
        description:
          'Для любой задачи стараюсь найти оптимальное и понятное решение. Понимаю в каких случаях стоит использовать тот или иной метод, паттерн, библиотеку или инструмент.',
      },
      {
        label: 'Имею в арсенале большое количество паттернов и приемов',
        Icon: ExtensionIcon,
        description:
          'Мемоизация, виртуализация, ленивая загрузка, деструктуризация, декоратор, каррирование, делегирование, рекурсия, модуль, фабрика, наблюдатель, прокси, примесь, троттлинг, дебаунс...',
      },
      {
        label: 'Создаю модульную и удобную архитектуру для каждого проекта',
        Icon: AccountTreeIcon,
        description:
          'Избегаю чрезмерной вложенности, следую принципу разделения ответственности, DRY и KISS. Каждый модуль / класс / компонент отвечает за один набор функций. Конфигурирую систему сборки проекта.',
      },
      {
        label: 'Использую актуальные фреймворки, библиотеки и инструменты',
        Icon: BuildIcon,
        description: (
          <>
            Регулярно слежу за обновлениями используемых технологий и в
            постоянном поиске новых. Помимо{' '}
            <Link
              component="button"
              className="Link"
              onClick={(): void => {
                setExpanded(
                  TECHNOLOGY_GROUPS.map((group: TechnologyGroup) => group.title)
                )
                scrollToView(sectionRef.current as HTMLElement)
                firstTechnologyActionRef.current?.focusVisible()
              }}
            >
              основных
            </Link>{' '}
            использую большое количество вспомогательных {TECHNOLOGY_TITLE.npm}
            -библиотек и инструментов.
          </>
        ),
      },
      {
        label: 'Соблюдаю единый стиль написания понятного кода',
        Icon: BrushIcon,
        description: `Пишу самодокументируемый код в декларативном стиле. Применяю лучшие практики популярных стайлгайдов. Активно использую ${TECHNOLOGY_TITLE.eslint} и ${TECHNOLOGY_TITLE.prettier}. Читаемый код важнее быстрого.`,
      },
      {
        label: 'Верстаю семантично, доступно, кроссбраузерно и pixel-perfect',
        Icon: PaletteIcon,
        description:
          'Верстаю пиксель в пиксель макеты любой сложности. Использую семантичные теги, не болею "диватозом" ☺. Тестирую во всех браузерах, включая IE. Забочусь о доступности. Верстаю письма.',
      },
      {
        label: 'Реализую адаптивный интерфейс и анимации',
        Icon: DevicesOtherIcon,
        description: `Применяю подходы desktop / mobile first. Тестирую интерфейс на каждом пикселе от минимальной до максимальной ширины экрана. Создаю производительные ${TECHNOLOGY_TITLE.js}, ${TECHNOLOGY_TITLE.css} и ${TECHNOLOGY_TITLE.svg} анимации.`,
      },
      {
        label: 'Рефакторю, оптимизирую и тестирую',
        Icon: LoopIcon,
        description:
          'Проверяю работу проекта в различных браузерах / устройствах. Провожу рефакторинг кода. Замеряю и ускоряю загрузку ресурсов. Минифицирую и оптимизирую файлы / изображения. Пишу тесты.',
      },
      {
        label: 'Планирую, декомпозирую и документирую',
        Icon: ListAltIcon,
        description: `Планирую бэклог, группирую, декомпозирую и оцениваю задачи. Применяю методологии Kanban / Scrum и GTD. Создал личную систему планирования. Люблю ${TECHNOLOGY_TITLE.trello} и ${TECHNOLOGY_TITLE.flow}. Пишу документацию.`,
      },
      {
        label: 'Провожу код-ревью и занимаюсь обучением',
        Icon: ChildFriendlyIcon,
        description:
          'Занимаюсь менторством, даю обратную связь по пулл-реквестам и делюсь опытом с коллегами. Разработал корпоративную программу стажировки. Есть опыт проведения собеседований.',
      },
    ],
    []
  )

  return (
    <Sections
      firstSection={
        <Info
          type="skills"
          title={TITLE.skills}
          text="Разрабатываю приложения, лендинги, многостраничные сайты и админки. Основной стек - React + TypeScript + Redux."
          features={features}
        />
      }
      secondSection={
        <Technologies
          expanded={expanded}
          sectionRef={sectionRef}
          firstTechnologyActionRef={firstTechnologyActionRef}
          setExpanded={setExpanded}
        />
      }
    />
  )
}
