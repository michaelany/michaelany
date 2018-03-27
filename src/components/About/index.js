import React from 'react';
import Grid from 'material-ui/Grid';

import Info from '../_common/Info';
import Social from './Social';
import Href from '../_common/Href';
import {STYLES} from '../../styles/muiTheme';
import {LINKS} from '../../utils/urls';

const features = [
    {id: 1, text: <span>Пишу <strong>читабельный</strong> и <strong>быстро работающий</strong> код</span>},
    {id: 2, text: 'Имею склонность к перфекционизму:',
        subItems: [
            {id: 1, text: <span>Создаю и поддерживаю <strong>понятную</strong> и <strong>удобную архитектуру</strong> проекта</span>},
            {id: 2, text: <span>Строго соблюдаю <strong>единый стиль</strong> написания кода</span>},
            {id: 3, text: <span>Следую принципу <strong>DRY</strong> и выношу в компоненты (модули) и декораторы переиспользуемые блоки кода</span>},
            {id: 4, text: <span>Анализирую ранее реализованные решения и провожу <strong>рефакторинг</strong></span>}
        ]
    },
    {id: 3, text: <span>Для задачи стараюсь выбрать наиболее <strong>простой</strong> и <strong>эффективный способ</strong> реализации</span>},
    {id: 4, text: <span>Пользуюсь готовыми библиотеками и самостоятельно разрабатываю <strong>решения для бизнес-логики</strong> и <strong>интерфейса</strong></span>},
    {id: 5, text: 'Верстаю:',
        subItems: [
            {id: 1, text: <span><strong>Семантически</strong> правильно</span>},
            {id: 2, text: <strong>Кроссбраузерно</strong>},
            {id: 3, text: <strong>Pixel-perfect</strong>},
            {id: 4, text: <span>Реализуя <strong>адаптивный</strong> интерфейс</span>},
            {id: 5, text: <span><strong>Оптимизируя</strong> изображения</span>},
            {id: 6, text: 'Разрешая вместе с дизайнером спорные моменты макета'},
            {id: 7, text: <span>Воплощая собственные <strong>UI/UX</strong> идеи</span>},
            {id: 8, text: 'Письма'}
        ]
    },
    {id: 6, text: <span>Следую <strong>современным стандартам</strong> и нахожусь в состоянии <strong>постоянного обучения</strong> (документации, статьи, книги и курсы)</span>},
    {id: 7, text: <span>Испытываю гордость и удовлетворение когда вижу <strong>эффективно работающий</strong> созданный мною проект</span>},
    {id: 8, text: <span>Работаю в компании <Href href={LINKS.experience.sevenGlyphs} >"7 glyphs"</Href> frontend разработчиком</span>}
];
const extra = [
        {id: 1, text: <span>Первое знакомство с веб-разработкой состоялось в 2003 году, когда мне было 13 лет. Проштудировав книгу <Href href={LINKS.bio.book} >"HTML. Экспресс-курс"</Href>, я создал свой первый сайт-презентацию для домашнего задания по информатике, проигнорировав PowerPoint. Это был довольно большой проект на чистом HTML без CSS и JS, единственная интерактивность которого заключалась в ссылках.</span>},
        {id: 2, text: <span>Далее был поиск себя в различных областях не связанных с разработкой и программированием (хотя с 2008 по 2009 год я работал инженером технической поддержки в компании “М.Видео”). После окончания <Href href={LINKS.bio.mgupi} >МГУПИ</Href> (выпуск 2012) поступил на второе высшее во <Href href={LINKS.bio.vgik} >ВГИК</Href> (выпуск 2017). И спустя год учебы в институте кинематографии появился жгучий интерес к веб-технологиям. Я очень удивился и загорелся, когда узнал как все двинулось вперед и развивается - фреймворки, SPA, системы сборки и контроля версий, методологии верстки, анимации, препроцессоры, флексы и т.д. Это превратилось в хобби. Но уже очень очень скоро мое новое увлечение стало все больше меня занимать, и я решил с головой нырнуть в эту среду. Хобби стало делом всей жизни.</span>},
        {id: 3, text: 'Помимо всего прочего люблю путешествовать с любимой девушкой по миру. За последние два года успели побывать в Таиланде, Париже, Риге, на Крите, в Афинах, Барселоне, Кисловодске, а также совершили пеший поход на Перевал Дятлова.'}
];

export default function About() {
    return (
        <div className="about page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={12} md={6}>
                    <Info
                        {...{extra}}
                        title="Обо мне"
                        subtitle="Живу и работаю в Москве. Профессионально занимаюсь веб-разработкой два года"
                        color="green"
                        items={features}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Social />
                </Grid>
            </Grid>
        </div>
    );
}
