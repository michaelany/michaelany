import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.css';
import urls from "../../../utils/urls";

Logo.propTypes = {
    panel: PropTypes.string.isRequired
};

export default function Logo({panel}) {
    return <Link className={`logo logo_type_${panel}`} to={urls.home}>MA</Link>;
}
