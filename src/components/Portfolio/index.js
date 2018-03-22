import React from 'react';
import Grid from 'material-ui/Grid';

import './style.css';
import Preview from './Preview';
import {STYLES} from '../../styles/muiTheme';

const projects = [
    {id: 1, name: 'msp', title: 'Бизнес-навигатор МСП', color: 'blue'},
    {id: 2, name: '7-glyphs', title: '7 Glyphs', color: 'grass'},
    {id: 3, name: 'lazy-az', title: 'LazyAz', color: 'red'},
    {id: 4, name: 'lazy-az-dashboard', title: 'LazyAz Dashboard', color: 'yellow'},
    {id: 5, name: 'whip-around', title: 'Whip Around', color: 'green'},
    {id: 6, name: '12-saffron', title: '12 Saffron', color: 'yellow'},
    {id: 7, name: 'fcdc-dashboard', title: 'FCDC Dashboard', color: 'violet'},
    {id: 8, name: 'service-packages', title: 'Service Packages', color: 'grass'},
    {id: 9, name: 'my-portfolio', title: 'Мое портфолио', color: 'red'}
];

const renderProjects = () => projects.map(({id, ...props}) => (
    <Grid key={id} item component="li" xs={3}>
        <Preview {...props} />
    </Grid>
));

export default function Portfolio() {
    return (
        <div className="portfolio page page_bg-color_blue">
            <section className="portfolio__section">
                <h2 className="title title_color_white">Портфолио</h2>
                <div>
                    <Grid container component="ul" className="portfolio__list" spacing={0} style={STYLES.mainGridContainer}>
                        {renderProjects()}
                    </Grid>
                </div>
            </section>
        </div>
    );
}
