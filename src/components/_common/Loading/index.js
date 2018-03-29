import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';

import {COLORS} from '../../../styles/muiTheme';

Loading.propTypes = {
    color: PropTypes.string
};

export default function Loading({color = 'yellow'}) {
    const styles = {
        loading: {
            margin: 'auto',
            color: COLORS[color]
        }
    };
    return (
        <div className="loading page">
            <section className="section section_first f">
                <CircularProgress size={60} style={styles.loading} />
            </section>
        </div>
    );
}
