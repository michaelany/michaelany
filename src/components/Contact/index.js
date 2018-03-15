import React from 'react';
import Grid from 'material-ui/Grid';

import './style.css';
import {STYLES} from '../../styles/muiTheme';

export default function Contact() {
    return (
        <div className="contact page">
            <Grid container spacing={0} style={STYLES.gridContainer}>
                <Grid item xs={6}>
                    <section className="greeting section f fd-c jc-sb">
                        <div className="open-tag">&lt;contact&gt;</div>
                        <h2 className="title">Контакты</h2>
                        <div className="close-tag">&lt;/contact&gt;</div>
                    </section>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </div>
    );
}
