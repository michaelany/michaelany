import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import './style.css';
import {COLORS} from '../../../../styles/muiTheme';

const styles = {
    button: {
        textTransform: 'none',
        backgroundColor: 'transparent'
    }
};

Technology.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default function Technology({title, img, url, color = 'grey'}) {
    const buttonStyle = {
        ...styles.button,
        color: COLORS[color]
    };
    return (
        <Button href={url} className="technology f" rel="noopener noreferrer" target="_blank" role="link" style={buttonStyle}>
            <figure className="technology__figure f ai-c jc-c">
                <img className="technology__image" src={img[0]} srcSet={`${img[1]} 2x`} alt={title} />
                <figcaption className={`technology__caption technology__caption_color_${color} f ai-fe jc-c`}>
                    <h5 className="technology__title">{title}</h5>
                </figcaption>
            </figure>
        </Button>
    );
}
