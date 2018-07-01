import React from 'react';
import Typist from 'react-typist';
import Grid from 'material-ui/Grid';

import './style.css';
import Preview from './Preview';
import {STYLES} from '../../styles/muiTheme';

let projects = [
    {id: 1, name: 'msp', title: 'Бизнес-навигатор МСП'},
    {id: 2, name: '12-saffron', title: '12 Saffron'},
].reverse();

const renderProjects = () => projects.map(({id, ...props}) => (
    <Grid key={id} item className="portfolio__item" component="li" xs={12} sm={6} md={4} lg={3}>
        <Preview {...props} />
    </Grid>
));

export default function Portfolio() {
    return (
        <div className="portfolio page page_bg-color_blue">
            <section className="portfolio__section">
                <h2 className="title title_color_white">
                    <Typist startDelay={200}>Портфолио</Typist>
                </h2>
                <div>
                    <Grid container component="ul" className="portfolio__list" spacing={0} style={STYLES.mainGridContainer}>
                        {renderProjects()}
                    </Grid>
                </div>
            </section>
        </div>
    );
}
