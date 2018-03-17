import React from 'react';
import Grid from 'material-ui/Grid';

import Bio from './Bio';
import Social from './Social';
import {STYLES} from '../../styles/muiTheme';

export default function About() {
    return (
        <div className="about page">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={6}>
                    <Bio />
                </Grid>
                <Grid item xs={6}>
                    <Social />
                </Grid>
            </Grid>
        </div>
    );
}
