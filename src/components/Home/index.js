import React, {Component} from 'react';
import Grid from 'material-ui/Grid';

import Greeting from './Greeting';
import Poster from './Poster';
import urls from '../../utils/urls';
import {STYLES} from '../../styles/muiTheme';

export default class Home extends Component {
    handleGoToPortfolio = () => this.props.history.push(urls.portfolio);

    handleGoToContact = () => this.props.history.push(urls.contact);

    render() {
        return (
            <div className="home page">
                <Grid container spacing={0} style={STYLES.mainGridContainer}>
                    <Grid item xs={6}>
                        <Greeting onGoToPortfolio={this.handleGoToPortfolio} onGoToContact={this.handleGoToContact} />
                    </Grid>
                    <Grid item xs={6}>
                        <Poster />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
