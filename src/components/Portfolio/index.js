import React from 'react';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';

import './style.css';
import ResponsiveBlock from '../_common/ResponsiveBlock';
import MuiButton from '../_common/MuiButton';
import {STYLES} from '../../styles/muiTheme';

const projects = [
    {id: 1, name: 'msp', title: 'Бизнес-навигатор МСП', color: 'blue'},
    {id: 2, name: '7-glyphs', title: '7 glyphs', color: 'green'},
    {id: 3, name: 'lazy-az', title: 'LazyAz', color: 'red'},
    {id: 4, name: 'lazy-az-dashboard', title: 'LazyAz Dashboard', color: 'yellow'},
    {id: 5, name: 'whip-around', title: 'Whip Around', color: 'green'},
    {id: 6, name: '12-saffron', title: '12 Saffron', color: 'yellow'},
    {id: 7, name: 'fcdc-dashboard', title: 'FCDC Dashboard', color: 'violet'},
    {id: 8, name: 'service-packages', title: 'Service Packages', color: 'green'},
    {id: 9, name: 'my-portfolio', title: 'Мое портфолио', color: 'blue'}
];

const renderProjects = () => projects.map(({id, name, title, color}) => (
    <Grid key={id} item component="li" xs={3}>
        <ResponsiveBlock className='portfolio__project f ai-c jc-c'>
            <div
                className={`portfolio__project-image portfolio__project-image_name_${name}`}
                role="img"
                aria-label={title}
            />
            <div className="portfolio__project-content f fd-c ai-c jc-c">
                <h3 className="portfolio__project-title">{title}</h3>
                <div className="portfolio__project-block">
                    <MuiButton variant="fab" kind={color}>
                        <Icon>visibility</Icon>
                    </MuiButton>
                </div>
            </div>
        </ResponsiveBlock>
    </Grid>
));

export default function Portfolio() {
    return (
        <div className="portfolio page page_bg-color_green">
            <section className="portfolio__section">
                <Grid container component="ul" className="portfolio__list" spacing={0} style={STYLES.mainGridContainer}>
                    {renderProjects()}
                </Grid>
            </section>
        </div>
    );
}
