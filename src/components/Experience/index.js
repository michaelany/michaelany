import React from 'react';
import Grid from 'material-ui/Grid';

import './style.css';
import {STYLES} from '../../styles/muiTheme';

export default function Experience() {
    return (
        <div className="experience page">
            <Grid container spacing={0} style={STYLES.gridContainer}>
                <Grid item xs={6}>
                    <section className="greeting section f fd-c jc-sb">
                        <div className="open-tag">&lt;experience&gt;</div>
                        <h2 className="title">Опыт</h2>
                        <div className="close-tag">&lt;/experience&gt;</div>
                    </section>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </div>
    );
}
