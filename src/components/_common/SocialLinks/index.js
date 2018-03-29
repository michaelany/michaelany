import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';
import MuiButton from '../../_common/MuiButton';
import ScrollAnimation from '../../_common/ScrollAnimation';

SocialLinks.propTypes = {
    links: PropTypes.array.isRequired,
    isRound: PropTypes.bool
};

export default function SocialLinks({links, isRound = false}) {
    const listClass = cn('social-links', {'social-links_round': isRound}, 'f jc-sb');
    return (
        <ul className={listClass}>
            {links.map(({id, icon, url}, index) => (
                <li key={id} className="social-links__item">
                    <ScrollAnimation name="bounceIn" offset={0} delay={100 + 100 * index}>
                        <MuiButton
                            variant="fab"
                            kind="white"
                            href={url}
                            rel="noopener noreferrer"
                            target="_blank"
                            role="link"
                        >
                            {icon}
                        </MuiButton>
                    </ScrollAnimation>
                </li>
            ))}
        </ul>
    );
}
