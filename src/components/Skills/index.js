import React from 'react';
import Grid from 'material-ui/Grid';

import './style.css';
import {STYLES} from '../../styles/muiTheme';

export default function Skills() {
    return (
        <div className="skills page">
            <Grid container spacing={0} style={STYLES.gridContainer}>
                <Grid item xs={6}>
                    <section className="greeting section f fd-c jc-sb">
                        <div className="open-tag">&lt;skills&gt;</div>
                        <h2 className="title">Навыки</h2>
                        <p>Обожаю React и использую его для создания приложений. Бизнес-логику пишу с использованием Redux. Для обычных страниц предпочитаю Pug. При написании стилей использую BEM, люблю MaterialUI, иногда пишу CSS-in-JS, ну и, конечно, SASS с переменными и миксинами.</p>
                        <div className="close-tag">&lt;/skills&gt;</div>
                    </section>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </div>
    );
}
