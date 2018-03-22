import React from 'react';
import PropTypes from 'prop-types';

Href.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired
};

export default function Href({children, href}) {
    return <a {...{href}} className="link" rel="noopener noreferrer" target="_blank">{children}</a>;
}
