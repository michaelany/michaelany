import React from 'react';
import Grid from 'material-ui/Grid';

import './style.css';
import Abilities from './Abilities';
import Technologies from './Technologies';
import {STYLES} from '../../styles/muiTheme';

export default function Skills() {
    return (
        <div className="skills page">
            <Grid container spacing={0} style={STYLES.gridContainer}>
                <Grid item xs={6}>
                    <Abilities />
                </Grid>
                <Grid item xs={6}>
                    <Technologies />
                </Grid>
            </Grid>
        </div>
    );
}
