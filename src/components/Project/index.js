import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

import msp from './msp.jpg';
import msp2x from './msp@2x.jpg';
import mspSecond from './msp-second.jpg';
import mspSecond2x from './msp-second@2x.jpg';
import mspThird from './msp-third.jpg';
import mspThird2x from './msp-third@2x.jpg';
import mspPlan from './msp-plan.pdf';
import sevenGlyphs from './7-glyphs.jpg';
import sevenGlyphs2x from './7-glyphs@2x.jpg';
import sevenGlyphsSecond from './7-glyphs-second.jpg';
import sevenGlyphsSecond2x from './7-glyphs-second@2x.jpg';
import sevenGlyphsThird from './7-glyphs-third.jpg';
import sevenGlyphsThird2x from './7-glyphs-third@2x.jpg';
import sevenGlyphsTablet from './7-glyphs-tablet.jpg';
import sevenGlyphsTablet2x from './7-glyphs-tablet@2x.jpg';
import sevenGlyphsPhone from './7-glyphs-phone.jpg';
import sevenGlyphsPhone2x from './7-glyphs-phone@2x.jpg';
import lazyAz from './lazy-az.jpg';
import lazyAz2x from './lazy-az@2x.jpg';
import lazyAzSecond from './lazy-az-second.jpg';
import lazyAzSecond2x from './lazy-az-second@2x.jpg';
import lazyAzThird from './lazy-az-third.jpg';
import lazyAzThird2x from './lazy-az-third@2x.jpg';
import lazyAzTablet from './lazy-az-tablet.jpg';
import lazyAzTablet2x from './lazy-az-tablet@2x.jpg';
import lazyAzPhone from './lazy-az-phone.jpg';
import lazyAzPhone2x from './lazy-az-phone@2x.jpg';
import lazyAzAdmin from './lazy-az-admin.jpg';
import lazyAzAdmin2x from './lazy-az-admin@2x.jpg';
import lazyAzAdminSecond from './lazy-az-admin-second.jpg';
import lazyAzAdminSecond2x from './lazy-az-admin-second@2x.jpg';
import lazyAzAdminThird from './lazy-az-admin-third.jpg';
import lazyAzAdminThird2x from './lazy-az-admin-third@2x.jpg';
import lazyAzAdminTablet from './lazy-az-admin-tablet.jpg';
import lazyAzAdminTablet2x from './lazy-az-admin-tablet@2x.jpg';
import lazyAzAdminPhone from './lazy-az-admin-phone.jpg';
import lazyAzAdminPhone2x from './lazy-az-admin-phone@2x.jpg';
import whipAround from './whip-around.jpg';
import whipAround2x from './whip-around@2x.jpg';
import whipAroundSecond from './whip-around-second.jpg';
import whipAroundSecond2x from './whip-around-second@2x.jpg';
import whipAroundThird from './whip-around-third.jpg';
import whipAroundThird2x from './whip-around-third@2x.jpg';
import whipAroundTablet from './whip-around-tablet.jpg';
import whipAroundTablet2x from './whip-around-tablet@2x.jpg';
import whipAroundPhone from './whip-around-phone.jpg';
import whipAroundPhone2x from './whip-around-phone@2x.jpg';
import twelveSaffron from './12-saffron.jpg';
import twelveSaffron2x from './12-saffron@2x.jpg';
import twelveSaffronSecond from './12-saffron-second.jpg';
import twelveSaffronSecond2x from './12-saffron-second@2x.jpg';
import twelveSaffronThird from './12-saffron-third.jpg';
import twelveSaffronThird2x from './12-saffron-third@2x.jpg';
import twelveSaffronTablet from './12-saffron-tablet.jpg';
import twelveSaffronTablet2x from './12-saffron-tablet@2x.jpg';
import twelveSaffronPhone from './12-saffron-phone.jpg';
import twelveSaffronPhone2x from './12-saffron-phone@2x.jpg';
import fcdc from './fcdc.jpg';
import fcdc2x from './fcdc@2x.jpg';
import fcdcSecond from './fcdc-second.jpg';
import fcdcSecond2x from './fcdc-second@2x.jpg';
import fcdcThird from './fcdc-third.jpg';
import fcdcThird2x from './fcdc-third@2x.jpg';
import servicePackages from './service-packages.jpg';
import servicePackages2x from './service-packages@2x.jpg';
import servicePackagesSecond from './service-packages-second.jpg';
import servicePackagesSecond2x from './service-packages-second@2x.jpg';
import servicePackagesThird from './service-packages-third.jpg';
import servicePackagesThird2x from './service-packages-third@2x.jpg';
import servicePackagesTablet from './service-packages-tablet.jpg';
import servicePackagesTablet2x from './service-packages-tablet@2x.jpg';
import servicePackagesPhone from './service-packages-phone.jpg';
import servicePackagesPhone2x from './service-packages-phone@2x.jpg';
import Description from './Description';
import Assets from './Assets';
import Href from '../_common/Href';
import {STYLES} from '../../styles/muiTheme';
import {LINKS} from '../../utils/urls';
import urls from "../../utils/urls";

const projects = [
    {
        id: 1,
        name: 'msp',
        title: 'Бизнес-навигатор МСП',
        subtitle: 'Ресурс для предпринимателей, которые хотят открыть или расширить свой бизнес',
        description: [
            {id: 1, text: <span>Мой первый коммерческий проект. Работал над ним вместе с командой <Href href={LINKS.experience.everpoint}>"Everpoint"</Href>. Проводил активное сопровождение и развитие клинтской части.</span>},
            {id: 2, text: 'Основа приложения уже была создана, мне предстояло добавлять новый функционал и вносить измнения в существующий код. Именно в процессе работы над этим проектом я впервые начал погружаться в мир React, сторонних библиотек, маршутизацию, REST API, функциональное программирование и т. д.'},
            {id: 3, text: 'В итоге сверстал большое количество компонентов (включая графики), написал много бизнес-логики и внушительно прокачал свои знания.'},
            {id: 4, text: <span>Также реализовал клиент-часть внутреннего проекта "Бизнес-план" на HTML5, шаблонах Django (внедрял под руководством бекенд-разработчика), JavaScript, Sass и Gulp. С помощью wkhtmltopdf на сервере происходит экспорт готового HTML в PDF (<Href href={mspPlan}>пример</Href>).</span>}
        ],
        technologies: ['React / Redux', 'ES2015', 'Handlebars', 'jQuery', 'CSS-Modules', 'Sass', 'Semantic-UI', 'REST API', 'Webpack'],
        release: 'Август 2016',
        color: 'blue',
        images: [
            [msp, msp2x],
            [mspSecond, mspSecond2x],
            [mspThird, mspThird2x]
        ],
        url: LINKS.projects.msp,
        pdf: mspPlan
    },
    {
        id: 2,
        name: '7-glyphs',
        title: '7 Glyphs',
        subtitle: 'Сайт компании "7 glyphs"',
        description: [
            {id: 1, text: 'Решил помочь хорошему знакомому с проектом. Суть заключалась в переписывании существующего кода сайта под React. Реализовывал самостоятельно.'},
            {id: 2, text: 'Сайт был написан на простом HTML, jQuery и CSS. Разделение страниц HTML на компоненты (подкомпоненты) и подключение роутинга не составило большого труда, зато принесло много удовольствия (как раз хотел применить свои знания на свежем проекте.'},
            {id: 3, text: 'В итоге простой сайт превратил в SPA, набил руку и получил предложение о долгосрочном сотрудничестве.'}
        ],
        technologies: ['React', 'ES2015', 'jQuery', 'Адаптивная верстка', 'REST API', 'Gulp', 'Webpack'],
        release: 'Январь 2017',
        color: 'green',
        images: [
            [sevenGlyphs, sevenGlyphs2x],
            [sevenGlyphsSecond, sevenGlyphsSecond2x],
            [sevenGlyphsThird, sevenGlyphsThird2x],
            [sevenGlyphsTablet, sevenGlyphsTablet2x],
            [sevenGlyphsPhone, sevenGlyphsPhone2x]
        ],
        url: LINKS.projects.sevenGlyphs
    },
    {
        id: 3,
        name: 'lazy-az',
        title: 'LazyAz',
        subtitle: 'Сайт сервиса доставки "LazyAz"',
        description: [
            {id: 1, text: <span>Мой первый с нуля написанный коммерческий проект. Реализовал всю клиентскую часть. Параллельно в команде <Href href={LINKS.experience.sevenGlyphs}>"7 glyphs"</Href> другие разработчики создавали iOS и Android приложения.</span>},
            {id: 2, text: 'Сначала сверстал по макету все страницы. К тому времени на сервере уже был готов API, начал проектирование и реализацию бизнес-логики приложения на Redux. Также начал применение cookies и localStorage. Вскоре проект был готов. Сайт заработал и был на моей поддержке.'},
            {id: 3, text: 'Через какое-то время клиент запросил сделать редизайн и расширение функционала. Дизайнер выдал новый макет, переверстал весь проект, после реализовал адаптивный интерфейс и начал подключать и связывать новый API. Работы и новшеств было много.'},
            {id: 4, text: 'В итоге сверстал и переверствл весть проект, укрепил навык работы с REST API, спроектировал всю архитектуру и модель приложения, узнал много нового.'},
         ],
        technologies: ['React / Redux', 'ES2015', 'jQuery', 'BEM', 'Sass', 'Адаптивная верстка', 'REST API', 'Gulp', 'Webpack'],
        release: 'Март 2017',
        color: 'red',
        images: [
            [lazyAz, lazyAz2x],
            [lazyAzSecond, lazyAzSecond2x],
            [lazyAzThird, lazyAzThird2x],
            [lazyAzTablet, lazyAzTablet2x],
            [lazyAzPhone, lazyAzPhone2x]
        ],
        url: LINKS.projects.lazyAz
    },
    {
        id: 4,
        name: 'lazy-az-dashboard',
        title: 'LazyAz Dashboard',
        subtitle: 'Админка для сервиса доставки "LazyAz"',
        description: [
            {id: 1, text: <span>Реализовал все view компоненты админки на шаблонизаторе Blade (Laravel). Работал в команде с разработчиком из <Href href={LINKS.experience.sevenGlyphs}>"7 glyphs".</Href></span>},
            {id: 2, text: 'Впервые применил знания основ PHP в работе. Сверстал все "вьюшки" админки на Bootstrap, писал JavaScript / jQuery для интерактивного интерфейса, с помощью PHP создавал логику рендера данных в шаблонах. Немного работал с контроллерами и маршрутизацией.'},
            {id: 3, text: 'В итоге создал всю визуальную часть админки, приложил руку к созданию бизнес-логики, познал основы Laravel и попрактиковался в PHP.'},
        ],
        technologies: ['PHP', 'Laravel', 'ES5', 'jQuery', 'Bootstrap', 'Адаптивная верстка'],
        release: 'Май 2017',
        color: 'yellow',
        images: [
            [lazyAzAdmin, lazyAzAdmin2x],
            [lazyAzAdminSecond, lazyAzAdminSecond2x],
            [lazyAzAdminThird, lazyAzAdminThird2x],
            [lazyAzAdminTablet, lazyAzAdminTablet2x],
            [lazyAzAdminPhone, lazyAzAdminPhone2x]
        ]
    },
    {
        id: 5,
        name: 'whip-around',
        title: 'Whip Around',
        subtitle: 'Сайт сервиса техосмотра автомобилей "Whip Around"',
        description: [
            {id: 1, text: <span>Проводил сопровождение и развитие view компонентов админки на шаблонизаторе Blade (Laravel). Работал в команде с разработчиком из <Href href={LINKS.experience.sevenGlyphs}>"7 glyphs".</Href></span>},
            {id: 2, text: 'Проект уже был написан. Основными задачами были реализация адаптивного интерфейса, расширение функционала, исправление ошибок. Шаблонизотр Blade, PHP, JavaScript / jQuery и Bootstrap вовсю мной использовались.'},
            {id: 3, text: 'В итоге сверстал адаптивный интерфейс, написал много JS, снова поработал с Blade и PHP.'}
        ],
        technologies: ['PHP', 'Laravel', 'ES5', 'jQuery', 'Bootstrap', 'Адаптивная верстка'],
        release: 'Июнь 2017',
        color: 'green',
        images: [
            [whipAround, whipAround2x],
            [whipAroundSecond, whipAroundSecond2x],
            [whipAroundThird, whipAroundThird2x],
            [whipAroundTablet, whipAroundTablet2x],
            [whipAroundPhone, whipAroundPhone2x]
        ],
        url: LINKS.projects.whipAround
    },
    {
        id: 6,
        name: '12-saffron',
        title: '12 Saffron',
        subtitle: 'Целевая страница для продажи дома',
        description: [
            {id: 1, text: 'Решил помочь хорошему знакомому с проектом. Суть заключалась в создании целевой страницы для срочной продажи дома в Окленде (Новая Зеландия). Реализовывал самостоятельно.'},
            {id: 2, text: 'Для верстки лендинга использовал HTML шаблонизатор Pug. Из интерактивных элементов на странице должны были быть карусели изображений, табы, видео-контент и hash навигация с плавным скроллом. Очень попросили закончить как можно быстрее.'},
            {id: 3, text: 'В итоге меньше чем за неделю удалось все сделать. Дом продали через два дня.'}
        ],
        technologies: ['Pug', 'ES2015', 'jQuery', 'BEM', 'Sass', 'Адаптивная верстка', 'Gulp'],
        release: 'Август 2017',
        color: 'yellow',
        images: [
            [twelveSaffron, twelveSaffron2x],
            [twelveSaffronSecond, twelveSaffronSecond2x],
            [twelveSaffronThird, twelveSaffronThird2x],
            [twelveSaffronTablet, twelveSaffronTablet2x],
            [twelveSaffronPhone, twelveSaffronPhone2x]
        ]
    },
    {
        id: 7,
        name: 'fcdc-dashboard',
        title: 'FCDC Dashboard',
        subtitle: 'Админка для сервиса управления мероприятиями "FCDC"',
        description: [
            {id: 1, text: ''}
        ],
        technologies: ['React / Redux', 'ES2015', 'BEM', 'Sass', 'Material-UI', 'Адаптивная верстка', 'REST API', 'Create React App'],
        release: 'Январь 2018',
        color: 'violet',
        images: [
            [fcdc, fcdc2x],
            [fcdcSecond, fcdcSecond2x],
            [fcdcThird, fcdcThird2x]
        ]
    },
    {
        id: 8,
        name: 'service-packages',
        title: 'Service Packages',
        subtitle: 'Целевые страницы для рекламы услуг компании "7 glyphs"',
        description: [

        ],
        technologies: ['React', 'ES2015', 'BEM', 'Sass', 'Material-UI', 'Адаптивная верстка', 'REST API', 'Create React App'],
        release: 'Февраль 2018',
        color: 'green',
        images: [
            [servicePackages, servicePackages2x],
            [servicePackagesSecond, servicePackagesSecond2x],
            [servicePackagesThird, servicePackagesThird2x],
            [servicePackagesTablet, servicePackagesTablet2x],
            [servicePackagesPhone, servicePackagesPhone2x]
        ],
        url: LINKS.projects.servicePackages
    }
];

Project.propTypes = {
    match: PropTypes.object.isRequired,
};

export default function Project({match}) {
    const project = projects.find(({name}) => name === match.params.project);
    const {title, subtitle, description, technologies, release, color, images, url, pdf} = project;
    return (
        <div className="project page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={6}>
                    <Description {...{title, subtitle, description, technologies, release, color}} />
                </Grid>
                <Grid item xs={6}>
                    <Assets {...{title, color, images, url, pdf}} />
                </Grid>
            </Grid>
        </div>
    );
}
