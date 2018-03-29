import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import './style.css';
import Panel from '../Panel';
import ScrollToTop from '../_common/ScrollToTop';
import muiTheme from '../../styles/muiTheme';
import urls from '../../utils/urls';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('../Home'),
    loading: Loading,
});
const About = Loadable({
    loader: () => import('../About'),
    loading: Loading,
});
const Skills = Loadable({
    loader: () => import('../Skills'),
    loading: Loading,
});
const Experience = Loadable({
    loader: () => import('../Experience'),
    loading: Loading,
});
const Portfolio = Loadable({
    loader: () => import('../Portfolio'),
    loading: Loading,
});
const Project = Loadable({
    loader: () => import('../Project'),
    loading: Loading,
});
const Contact = Loadable({
    loader: () => import('../Contact'),
    loading: Loading,
});

const theme = createMuiTheme(muiTheme);

const renderEmptyPage = () => <Redirect to={urls.home} />;

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop>
                <MuiThemeProvider {...{theme}}>
                    <div className="app f">
                        <Reboot />
                        <Panel />
                        <main className="app__main fb-100">
                            <Switch>
                                <Route exact path={urls.home} component={Home} />
                                <Route exact path={urls.about} component={About} />
                                <Route exact path={urls.skills} component={Skills} />
                                <Route exact path={urls.experience} component={Experience} />
                                <Route exact path={urls.portfolio} component={Portfolio} />
                                <Route exact path={`${urls.portfolio}/:project`} component={Project} />
                                <Route exact path={urls.contact} component={Contact} />
                                <Route render={renderEmptyPage} />
                            </Switch>
                        </main>
                    </div>
            </MuiThemeProvider>
            </ScrollToTop>
        </HashRouter>
    );
}

