import React from 'react';
import Grid from 'material-ui/Grid';

import Info from '../_common/Info';
import Technologies from './Technologies';
import Href from '../_common/Href';
import {STYLES} from '../../styles/muiTheme';
import {LINKS} from "../../utils/urls";

const abilities = [
    {id: 1, text: <span>Также использую различные <strong>React-бибилиотеки</strong> для маршрутизации, мемоизации, иммутабельных данных, ленивой загрузки, анимации, графиков, интерфеса и т.д.</span>},
    {id: 2, text: <span>Для простых страниц вместо React <strong>JSX</strong> предпочитаю шаблонизаторы:</span>,
        subItems: [
            {id: 1, text: <strong>Pug</strong>},
            {id: 2, text: <strong>Handlebars</strong>},
            {id: 3, text: <span>Есть опыт работы с Laravel <strong>Blade</strong> для PHP</span>}
        ]
    },
    {id: 3, text: <span>Программирую на <strong>JavaScript</strong>, используя современные возможности <strong>ES2015</strong> и <strong>ES2016</strong></span>},
    {id: 4, text: <span>В редких случаях для специфических задач использую <strong>jQuery</strong></span>},
    {id: 5, text: <span>Предпочитаю методологию <strong>BEM</strong> и препроцессор <strong>Sass</strong> для <strong>CSS</strong>, иногда пишу CSS-in-JS, в частности для стилизации компонентов библиотеки Material-UI</span>},
    {id: 6, text: 'Из CSS-фреймворков люблю:',
        subItems: [
            {id: 1, text: <span><strong>Material-UI</strong> (для React-приложений)</span>},
            {id: 2, text: <strong>Bootstrap</strong>},
            {id: 3, text: <span>Есть опыт работы с <strong>Semantic-Ui</strong></span>},
            {id: 4, text: <span><strong>Foundation for Emails</strong> (для верстки писем)</span>},
        ]
    },
    {id: 8, text: <span>Знаю основы <strong>PHP</strong>, есть опыт работы с <strong>Laravel</strong></span>},
    {id: 9, text: <span>Для управления зависимостями пользуюсь <strong>Yarn</strong>/<strong>NPM</strong></span>},
    {id: 10, text: <span>Для сборки React-проектов часто обращаюсь к <strong>Create React App</strong> (кастомизирую при необходимости), для остальных пишу свою конфигурацию на <strong>Webpack</strong> и <strong>Gulp</strong></span>},
    {id: 11, text: 'Мой инструментарий:',
        subItems: [
            {id: 1, text: <span><strong>PhpStorm</strong> (IDE)</span>},
            {id: 2, text: <strong>iTerm2</strong>},
            {id: 3, text: <span><strong>Chrome DevTools</strong> (также React DevTools, Redux DevTools и другие)</span>},
            {id: 4, text: <strong>Git</strong>},
            {id: 5, text: <span><strong>Zeplin</strong> (для верстки)</span>},
            {id: 6, text: <strong>Sketch</strong>},
            {id: 7, text: <span><strong>Paw</strong> (для работы с API)</span>},
            {id: 8, text: <strong>ImageOptim</strong>}
        ]
    },
    {id: 12, text:  <span>Пользуюсь различными <strong>онлайн-инструментами</strong> для анализа производительности, работы со стилями, шрифтами, иконками и т.д.</span>}
];
const extra = [
    {id: 1, text: <span>Мой технологический стек постоянно обновляется и пополняется. В основном читаю официальные документации по изучаемым технологиям, также справочники (часто обращаюсь к <Href href={LINKS.skills.mdn}>MDN</Href> и <Href href={LINKS.skills.webRef}>WebReference</Href>) и учебники (любимый <Href href={LINKS.skills.learnJS}>"Современный учебник Javascript"</Href> от Ильи Кантора, сейчас перечитываю английскую версию <Href href={LINKS.skills.infoJS}>"The Modern JavaScript Tutorial"</Href>), статьи и книги (акцент на паттерны, практики, информационные технологии и программирование в целом). Сейчас изучаю React Native и Mobx, также хочу попробовать Vue.js, продолжить изучение PHP и погрузиться в Node JS.</span>},
    {id: 2, text: <span>Люблю онлайн-образование и курсы. Понравился контент на <Href href={LINKS.skills.learnJSCourses}>learn.javascript.ru</Href>, <Href href={LINKS.skills.hexlet}>Hexlet</Href>, <Href href={LINKS.skills.laracasts}>Laracasts</Href> и <Href href={LINKS.skills.loftSchool}>LoftSchool</Href>. Когда-то на начальном этапе души не чаял в <Href href={LINKS.skills.codecademy}>codecademy</Href>.</span>},
    {id: 3, text: <span>Являюсь обладателем двух дипломов (два высших образования). Окончил очно в 2012 году <Href href={LINKS.bio.mgupi}>МГУПИ</Href>. В 2017 году, параллельно работая в компании <Href href={LINKS.experience.everpoint}>"Everpoint"</Href>, окончил очно <Href href={LINKS.bio.vgik}>ВГИК.</Href></span>}
];

export default function Skills() {
    return (
        <div className="skills page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={6}>
                    <Info
                        {...{extra}}
                        title="Навыки"
                        subtitle="Создаю веб-приложения на React. Бизнес-логику пишу на Redux"
                        color="blue"
                        items={abilities}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Technologies />
                </Grid>
            </Grid>
        </div>
    );
}
