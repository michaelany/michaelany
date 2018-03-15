import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';

import {COLORS} from '../../../styles/muiTheme';

const commonStyles = {
    whiteColorButton: {
        color: 'white'
    },
    blackColorButton: {
        color: COLORS.black
    },
    marginButton: {
        marginRight: 20
    }
};
const styles = {
    whiteButton: {
        ...commonStyles.blackColorButton,
        backgroundColor: 'white',
        '&:hover': {
            '@media (hover: none)': {
                backgroundColor: 'white'
            }
        }
    },
    blueButton: {
        ...commonStyles.whiteColorButton,
        backgroundColor: COLORS.blue,
        '&:hover': {
            backgroundColor: COLORS.darkBlue,
            '@media (hover: none)': {
                backgroundColor: COLORS.blue
            }
        }
    },
    greenButton: {
        ...commonStyles.whiteColorButton,
        backgroundColor: COLORS.green,
        '&:hover': {
            backgroundColor: COLORS.darkGreen,
            '@media (hover: none)': {
                backgroundColor: COLORS.green
            }
        }
    }
};

MuiButton.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    kind: PropTypes.string,
    isMargin: PropTypes.bool
};

function MuiButton({children, classes, kind = 'white', isMargin = false, ...props}) {
    const buttonStyle = isMargin ? commonStyles.marginButton : null;
    return (
        <Button
            {...props}
            className={classes[`${kind}Button`]}
            style={buttonStyle}
        >
            {children}
        </Button>
    );
}

export default withStyles(styles)(MuiButton);