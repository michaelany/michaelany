import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import './style.css';
import Logo from '../../_common/Logo';
import Navigation from '../../_common/Navigation';
import {getPanelClass} from '../../../utils/helpers';

Sidebar.propTypes = {
    location: PropTypes.object.isRequired
};

function Sidebar({location: {pathname}}) {
    return (
        <aside className={getPanelClass('sidebar', pathname)}>
            <Logo panel="sidebar" />
            <Navigation />
        </aside>
    );
}

export default withRouter(Sidebar);
