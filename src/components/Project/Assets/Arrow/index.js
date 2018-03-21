import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import './style.css';

const styles = {
    iconButton: {
        color: 'white'
    }
};

Arrow.propTypes = {
    isPrev: PropTypes.bool,
    onClick: PropTypes.func
};

export default function Arrow({isPrev = false, onClick}) {
    const arrowType = isPrev ? 'left' : 'right';
    return (
        <div className={`arrow arrow_${arrowType}`}>
            <IconButton {...{onClick}} aria-label={`Slide ${arrowType}`} style={styles.iconButton}>
                <Icon>{`chevron_${arrowType}`}</Icon>
            </IconButton>
        </div>
    );
}
