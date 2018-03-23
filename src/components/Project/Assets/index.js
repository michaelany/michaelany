import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

import './style.css';
import Arrow from './Arrow';
import ResponsiveBlock from '../../_common/ResponsiveBlock';
import MuiButton from '../../_common/MuiButton';

const styles = {
    iconButton: {
        color: 'white',
        width: 38,
        height: 38
    }
};

const settings = {
    customPaging: () => (
        <IconButton aria-label="Show slide" style={styles.iconButton}>
            <div className="assets__point" />
        </IconButton>
    ),
    nextArrow: <Arrow />,
    prevArrow: <Arrow isPrev />,
    dots: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

Assets.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    url: PropTypes.string,
    pdf: PropTypes.string
};

const renderImages = (images, title) => images.map(image => (
    <div key={image[0]} className="f">
        <ResponsiveBlock heightRatio={66.4}>
            <img src={image[0]} srcSet={`${image[1]} 2x`} className="assets__image" alt={title} />
        </ResponsiveBlock>
    </div>
));

const renderButton = (type, url, isPdf = false) => {
    const icon = isPdf ? 'picture_as_pdf' : 'launch';
    return (
        <Tooltip title={`Открыть ${type}`} placement="bottom" enterDelay={300} leaveDelay={100}>
            <MuiButton
                variant="fab"
                kind="white"
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                role="link"
            >
                <Icon>{icon}</Icon>
            </MuiButton>
        </Tooltip>
    );
};

export default function Assets({title, color, images, url = '', pdf = ''}) {
    return (
        <section className={`assets section section_bg-color_${color}`}>
            <div className="assets__slider">
                <Slider {...settings}>
                    {renderImages(images, title)}
                </Slider>
            </div>
            <div className="f jc-c">
                {url && renderButton('проект', url)}
                {pdf && renderButton('Бизнес-план', pdf, true)}
            </div>
        </section>
    );
}

