import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';

ResponsiveBlock.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    heightRatio: PropTypes.number
};

export default function ResponsiveBlock({children, className = '', heightRatio = 100}) {
    const responsiveBlockClassName = cn('responsive-block', className);
    const blockStyle = {paddingBottom: `${heightRatio}%`};
    return (
        <div className={responsiveBlockClassName}>
            <div className="responsive-block__content">
                {children}
            </div>
            <div style={blockStyle} />
        </div>
    );
}

