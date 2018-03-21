import React from 'react';
import Grid from 'material-ui/Grid';

import Info from '../_common/Info';
import Steps from './Steps';
import Href from '../_common/Href';
import {STYLES} from '../../styles/muiTheme';
import {LINKS} from '../../utils/urls';

const responsibilities = [
    {id: 1, text: <span>Работал <strong>инженером технической поддержки</strong> в компании "М.Видео":</span>,
        subItems: [
            {id: 1, text: 'Прием и ведение заявок в Service Desk'},
            {id: 2, text: 'Консультирование сотрудников'},
            {id: 3, text: 'Решение проблем с программным обеспечением и железом'},
            {id: 4, text: 'Установка и диагностика ПО'},
            {id: 5, text: 'Диагностика работы серверов'}
        ]
    },
    {id: 2, text: <span>Работал <strong>верстальщиком</strong> в компании <Href href={LINKS.experience.everpoint}>"Everpoint"</Href>:</span>,
        subItems: [
            {id: 1, text: 'Верстка страниц и компонентов интерфейса'},
            {id: 2, text: 'Кроссбраузерная и адаптивная верстка'},
            {id: 3, text: 'Оптимизация сушествующей верстки'},
            {id: 4, text: 'Рефакторинг кода'}
        ]
    },
    {id: 3, text: <span>Работал <strong>frontend-разработчиком</strong> в компании "Everpoint":</span>,
        subItems: [
            {id: 1, text: 'Разработка клиентской бизнес-логики и компонентов системы'},
            {id: 2, text: 'Работа с REST API'},
            {id: 3, text: 'Совершенствование архитектуры приложения'},
            {id: 4, text: 'Верстка страниц и компонентов интерфейса'},
            {id: 5, text: 'Адаптивная и кроссбраузерная верстка'}
        ]
    },
    {id: 4, text: <span>Работаю удаленно <strong>frontend-разработчиком</strong> в компании <Href href={LINKS.experience.sevenGlyphs}>"7 glyphs"</Href>:</span>,
        subItems: [
            {id: 1, text: 'Разработка клиентской бизнес-логики и компонентов систем'},
            {id: 2, text: 'Работа с REST API'},
            {id: 3, text: 'Проектирование архитектуры приложений'},
            {id: 4, text: 'Сопровождение кода'},
            {id: 5, text: 'Верстка страниц и компонентов интерфейса'},
            {id: 6, text: 'Адаптивная и кроссбраузерная верстка'},
            {id: 7, text: 'Учет затраченного времени на выполнение задач'},
        ]
    }
];

export default function Experience() {
    return (
        <div className="experience page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={6}>
                    <Info
                        title="Опыт"
                        subtitle='Работаю в компании "7 glyphs". Профессионально занимаюсь веб-разработкой два года'
                        color="violet"
                        items={responsibilities}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Steps />
                </Grid>
            </Grid>
        </div>
    );
}
