import React from 'react';
import Grid from 'material-ui/Grid';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Icon from 'material-ui/Icon';

import './style.css';
import html from './html.jpg';
import html2x from './html@2x.jpg';
import react from './react.jpg';
import react2x from './react@2x.jpg';
import pug from './pug.jpg';
import pug2x from './pug@2x.jpg';
import handlebars from './handlebars.jpg';
import handlebars2x from './handlebars@2x.jpg';
import laravel from './laravel.jpg';
import laravel2x from './laravel@2x.jpg';
import css from './css.jpg';
import css2x from './css@2x.jpg';
import sass from './sass.jpg';
import sass2x from './sass@2x.jpg';
import bootstrap from './bootstrap.jpg';
import bootstrap2x from './bootstrap@2x.jpg';
import semanticUI from './semantic-ui.jpg';
import semanticUI2x from './semantic-ui@2x.jpg';
import materialUI from './material-ui.jpg';
import materialUI2x from './material-ui@2x.jpg';
import foundationForEmails from './foundation-for-emails.jpg';
import foundationForEmails2x from './foundation-for-emails@2x.jpg';
import javascript from './javascript.jpg';
import javascript2x from './javascript@2x.jpg';
import redux from './redux.jpg';
import redux2x from './redux@2x.jpg';
import jquery from './jquery.jpg';
import jquery2x from './jquery@2x.jpg';
import node from './node.jpg';
import node2x from './node@2x.jpg';
import php from './php.jpg';
import php2x from './php@2x.jpg';
import npm from './npm.jpg';
import npm2x from './npm@2x.jpg';
import yarn from './yarn.jpg';
import yarn2x from './yarn@2x.jpg';
import webpack from './webpack.jpg';
import webpack2x from './webpack@2x.jpg';
import gulp from './gulp.jpg';
import gulp2x from './gulp@2x.jpg';
import phpstorm from './phpstorm.jpg';
import phpstorm2x from './phpstorm@2x.jpg';
import git from './git.jpg';
import git2x from './git@2x.jpg';
import zeplin from './zeplin.jpg';
import zeplin2x from './zeplin@2x.jpg';
import sketch from './sketch.jpg';
import sketch2x from './sketch@2x.jpg';
import paw from './paw.jpg';
import paw2x from './paw@2x.jpg';
import imageOptim from './image-optim.jpg';
import imageOptim2x from './image-optim@2x.jpg';
import Technology from './Technology';
import ResponsiveBlock from '../../_common/ResponsiveBlock';
import {STYLES} from '../../../styles/muiTheme';
import {LINKS} from '../../../utils/urls';

const technologyGroups = [
    {
        id: 1,
        title: 'HTML',
        technologies: [
            {id: 1, title: 'HTML5', img: [html, html2x], color: 'red', url: LINKS.technologies.html},
            {id: 2, title: 'JSX', img: [react, react2x], color: 'blue', url: LINKS.technologies.jsx},
            {id: 3, title: 'Pug', img: [pug, pug2x], color: 'yellow', url: LINKS.technologies.pug},
            {id: 4, title: 'Handlebars', img: [handlebars, handlebars2x], url: LINKS.technologies.handlebars},
            {id: 5, title: 'Blade', img: [laravel, laravel2x], color: 'red', url: LINKS.technologies.blade}
        ]
    },
    {
        id: 2,
        title: 'CSS',
        technologies: [
            {id: 1, title: 'CSS3', img: [css, css2x], color: 'blue', url: LINKS.technologies.css},
            {id: 2, title: 'Sass', img: [sass, sass2x], color: 'red', url: LINKS.technologies.sass},
            {id: 3, title: 'Material-UI', img: [materialUI, materialUI2x], url: LINKS.technologies.materialUI},
            {id: 4, title: 'Bootstrap', img: [bootstrap, bootstrap2x], color: 'violet', url: LINKS.technologies.bootstrap},
            {id: 5, title: 'Semantic UI', img: [semanticUI, semanticUI2x], color: 'green', url: LINKS.technologies.semanticUI},
            {id: 6, title: 'Foundation for Emails', img: [foundationForEmails, foundationForEmails2x], color: 'yellow', url: LINKS.technologies.foundationForEmails}
        ]
    },
    {
        id: 3,
        title: 'JavaScript',
        technologies: [
            {id: 1, title: 'JavaScript', img: [javascript, javascript2x], color: 'yellow', url: LINKS.technologies.javascript},
            {id: 2, title: 'React', img: [react, react2x], color: 'blue', url: LINKS.technologies.react},
            {id: 3, title: 'Redux', img: [redux, redux2x], color: 'violet', url: LINKS.technologies.redux},
            {id: 4, title: 'Node', img: [node, node2x], url: LINKS.technologies.node},
            {id: 5, title: 'jQuery', img: [jquery, jquery2x], color: 'blue', url: LINKS.technologies.jquery}
        ]
    },
    {
        id: 4,
        title: 'PHP',
        technologies: [
            {id: 1, title: 'PHP', img: [php, php2x], color: 'violet', url: LINKS.technologies.php},
            {id: 2, title: 'Laravel', img: [laravel, laravel2x], color: 'red', url: LINKS.technologies.laravel}
        ]
    },
    {
        id: 5,
        title: 'Build Tools',
        technologies: [
            {id: 1, title: 'NPM', img: [npm, npm2x], color: 'red', url: LINKS.technologies.npm},
            {id: 2, title: 'Yarn', img: [yarn, yarn2x], color: 'blue', url: LINKS.technologies.yarn},
            {id: 3, title: 'Webpack', img: [webpack, webpack2x], color: 'blue', url: LINKS.technologies.webpack},
            {id: 4, title: 'Gulp', img: [gulp, gulp2x], color: 'red', url: LINKS.technologies.gulp}
        ]
    },
    {
        id: 6,
        title: 'Tools',
        technologies: [
            {id: 1, title: 'PhpStorm', img: [phpstorm, phpstorm2x], color: 'violet', url: LINKS.technologies.phpstorm},
            {id: 2, title: 'Git', img: [git, git2x], color: 'red', url: LINKS.technologies.git},
            {id: 3, title: 'Zeplin', img: [zeplin, zeplin2x], color: 'yellow', url: LINKS.technologies.zeplin},
            {id: 4, title: 'Sketch', img: [sketch, sketch2x], color: 'yellow', url: LINKS.technologies.sketch},
            {id: 5, title: 'Paw', img: [paw, paw2x], color: 'blue', url: LINKS.technologies.paw},
            {id: 6, title: 'ImageOptim', img: [imageOptim, imageOptim2x], url: LINKS.technologies.imageOptim}
        ]
    },
];

const renderTechnologyGroups = () => technologyGroups.map(({id, title, technologies}) => {
    const defaultExpanded = id === 1 || id === 2 || id === 3;
    return (
        <ExpansionPanel key={id} {...{defaultExpanded}}>
            <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
                <h4 className="technologies__title subtitle">{title}</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container component="ul" spacing={0} style={STYLES.gridContainer}>
                    {renderTechnologies(technologies)}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
});

const renderTechnologies = (technologies) => technologies.map(({id, ...props}) => (
    <Grid key={id} item component="li" xs={3}>
        <ResponsiveBlock>
            <Technology {...props} />
        </ResponsiveBlock>
    </Grid>
));


export default function Technologies() {
    return (
        <section className="technologies section">
            {renderTechnologyGroups()}
        </section>
    );
}
