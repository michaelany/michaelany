import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import './style.css';
import {COLORS} from '../../../../styles/muiTheme';

Technology.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string
};

const styles = {
    button: {
        textTransform: 'none',
        backgroundColor: 'transparent'
    }
};

export default function Technology({title, img, url, color = 'grey'}) {
    const buttonStyle = {
        ...styles.button,
        color: COLORS[color]
    };
    return (
        <Button component="a" href={url} className="technology" rel="noopener noreferrer" target="_blank" style={buttonStyle}>
            <figure className="technology__figure f ai-c jc-c">
                <img className="technology__image" src={img[0]} srcSet={`${img[1]} 2x`} alt={title} />
                <figcaption className={`technology__caption technology__caption_color_${color} f ai-fe jc-c`}>
                    <h5 className="technology__title">{title}</h5>
                </figcaption>
            </figure>
        </Button>
    );
}
