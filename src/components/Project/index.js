import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Grid from 'material-ui/Grid';

import msp from './msp.jpg';
import msp2x from './msp@2x.jpg';
import mspSecond from './msp-second.jpg';
import mspSecond2x from './msp-second@2x.jpg';
import mspThird from './msp-third.jpg';
import mspThird2x from './msp-third@2x.jpg';
import mspPlan from './msp-plan.pdf';
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
import Description from './Description';
import Assets from './Assets';
import Href from '../_common/Href';
import {STYLES} from '../../styles/muiTheme';
import urls, {LINKS} from '../../utils/urls';

const projects = [
    {
        id: 1,
        name: 'msp',
        title: 'Бизнес-навигатор МСП',
        subtitle: 'Ресурс для предпринимателей, которые хотят открыть или расширить свой бизнес',
        description: [
            {id: 1, text: <span>Мой первый коммерческий проект. Работал над ним вместе с командой <Href href={LINKS.experience.everpoint}>"Everpoint"</Href>. Проводил активное сопровождение и развитие клиентской части.</span>},
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
        name: '12-saffron',
        title: '12 Saffron',
        subtitle: 'Целевая страница для продажи дома',
        description: [
            {id: 1, text: 'Решил помочь хорошему знакомому с проектом. Суть заключалась в создании целевой страницы для срочной продажи дома в Окленде (Новая Зеландия). Реализовывал самостоятельно.'},
            {id: 2, text: 'Для верстки лендинга использовал HTML шаблонизатор Pug. Из интерактивных элементов на странице должны были быть карусели изображений, табы, видео-контент и hash навигация с плавным скроллом. Очень попросили закончить как можно быстрее.'},
            {id: 3, text: 'В итоге меньше чем за неделю удалось все сделать. Дом продали уже через два дня.'}
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
    }
];

Project.propTypes = {
    match: PropTypes.object.isRequired,
};

export default function Project({match}) {
    const project = projects.find(({name}) => name === match.params.project);
    if (!project) return <Redirect to={urls.portfolio} />;

    const {title, subtitle, description, technologies, release, color, images, url, pdf} = project;
    return (
        <div className="project page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={12} md={6}>
                    <Description {...{title, subtitle, description, technologies, release, color}} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Assets {...{title, color, images, url, pdf}} />
                </Grid>
            </Grid>
        </div>
    );
}
