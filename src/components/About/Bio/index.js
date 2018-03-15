import React from 'react';

import './style.css';
import BioExtra from './BioExtra';
import {LINKS} from '../../../utils/urls';

const features = [
    {id: 1, text: <span>Пишу <strong>читабельный</strong> и <strong>быстро работающий</strong> код</span>},
    {id: 2, text: 'Имею склонность к перфекционизму:',
        subFeatures: [
            {id: 1, text: <span>Создаю и поддерживаю <strong>понятную</strong> и <strong>удобную архитектуру</strong> проекта</span>},
            {id: 2, text: <span>Строго соблюдаю <strong>единый стиль</strong> написания кода</span>},
            {id: 3, text: <span>Следую принципу <strong>DRY</strong> и выношу в компоненты (модули) и декораторы переиспользуемые блоки кода</span>},
            {id: 4, text: <span>Анализирую ранее реализованные решения и провожу <strong>рефакторинг</strong></span>}
        ]
    },
    {id: 3, text: <span>Для задачи стараюсь выбрать наиболее <strong>простой</strong> и <strong>эффективный способ</strong> реализации</span>},
    {id: 4, text: <span>Пользуюсь готовыми библиотеками и самостоятельно разрабатываю <strong>решения для бизнес-логики</strong> и <strong>интерфейса</strong></span>},
    {id: 5, text: 'Верстаю:',
        subFeatures: [
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
    {id: 8, text: <span>Работаю в компании <a className="link" href={LINKS.sevenGlyphs} rel="noopener noreferrer" target="_blank">7 glyphs</a> front-end разработчиком</span>}
];

const renderFeatures = () => features.map(({id, text, subFeatures}) => {
    return (
        <li key={id} className="bio__item">
            {text}
            {subFeatures && <ul className="bio__sublist">{renderSubFeatures(subFeatures)}</ul>}
        </li>
    );
});

const renderSubFeatures = (subFeatures) => subFeatures.map(({id, text}) => (
    <li key={id} className="bio__sub-item">{text}</li>
));

export default function Bio() {
    return (
        <section className="bio section f fd-c jc-sb">
            <code className="open-tag">&lt;about&gt;</code>
            <div>
                <h2 className="bio__title title">Обо мне</h2>
                <h3 className="subtitle">Профессионально занимаюсь веб-разработкой два года. Родился и живу в Москве.</h3>
                <ul className="bio__list">
                    {renderFeatures()}
                </ul>
                <BioExtra />
            </div>
            <code className="close-tag">&lt;/about&gt;</code>
        </section>
    );
}