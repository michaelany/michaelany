import React from 'react';
import Grid from 'material-ui/Grid';

import Greeting from './Greeting';
import Poster from './Poster';
import {STYLES} from '../../styles/muiTheme';

export default function Home() {
    return (
        <div className="home page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={12} md={6}>
                    <Greeting />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Poster />
                </Grid>
            </Grid>
        </div>
    );
}
