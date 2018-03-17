import React from 'react';
import Grid from 'material-ui/Grid';

import './style.css';
import {STYLES} from '../../styles/muiTheme';

export default function Portfolio() {
    return (
        <div className="portfolio page page_bg-color_green">
            <Grid container spacing={0} style={STYLES.gridContainer}>
                <Grid item xs={6}>
                    <section className="greeting section f fd-c jc-sb">
                        <div className="open-tag">&lt;portfolio&gt;</div>
                        <h2 className="title">Портфолио</h2>
                        <div className="close-tag">&lt;/portfolio&gt;</div>
                    </section>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </div>
    );
}
