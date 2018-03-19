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
            {id: 2, text: <span><strong>Консультирование</strong> сотрудников</span>},
            {id: 3, text: <span><strong>Решение проблем</strong> с программным обеспечением и железом</span>},
            {id: 4, text: <span><strong>Установка</strong> и <strong>диагностика</strong> ПО</span>},
            {id: 5, text: 'Диагностика работы серверов'}
        ]
    },
    {id: 2, text: <span>Работал <strong>верстальщиком</strong> в компании <Href href={LINKS.experience.everpoint}>"Everpoint"</Href>:</span>,
        subItems: [
            {id: 1, text: <span><strong>Верстка</strong> страниц и компонентов интерфейса</span>},
            {id: 2, text: 'Кроссбраузерная и адаптивная верстка'},
            {id: 3, text: <span><strong>Оптимизация</strong> сушествующей верстки</span>},
            {id: 4, text: <span><strong>Рефакторинг</strong> кода</span>}
        ]
    },
    {id: 3, text: <span>Работал <strong>frontend-разработчиком</strong> в компании <Href href={LINKS.experience.everpoint}>"Everpoint"</Href>:</span>,
        subItems: [
            {id: 1, text: <span><strong>Разработка</strong> клиентской бизнес-логики и компонентов системы</span>},
            {id: 2, text: <span><strong>Совершенствование</strong> архитектуры приложения</span>},
            {id: 3, text: <span><strong>Верстка</strong> страниц и компонентов интерфейса</span>},
            {id: 4, text: 'Адаптивная и кроссбраузерная верстка'},
        ]
    },
    {id: 4, text: <span>Работаю удаленно <strong>frontend-разработчиком</strong> в компании <Href href={LINKS.experience.sevenGlyphs}>"7 glyphs"</Href>:</span>,
        subItems: [
            {id: 1, text: <span><strong>Разработка</strong> клиентской бизнес-логики и компонентов систем</span>},
            {id: 2, text: <span><strong>Проектирование</strong> архитектуры приложений</span>},
            {id: 3, text: <span><strong>Сопровождение</strong> кода</span>},
            {id: 4, text: <span><strong>Верстка</strong> страниц и компонентов интерфейса</span>},
            {id: 5, text: 'Адаптивная и кроссбраузерная верстка'},
            {id: 6, text: 'Учет затраченного времени на выполнение задач'},
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
