import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import './style.css';
import ResponsiveBlock from '../../_common/ResponsiveBlock';
import urls from '../../../utils/urls';

const styles = {
    button: {


    },
    icon: {
        color: 'white',
        fontSize: 40
    }
};

Preview.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default function Preview({name, title}) {
    return (
        <Link className="preview" to={`${urls.portfolio}/${name}`} tabIndex="-1">
            <Button component="div" style={styles.button}>
                <ResponsiveBlock>
                    <div
                        className={`preview__image preview__image_name_${name}`}
                        role="img"
                        aria-label={title}
                    />
                    <div className="preview__content f fd-c ai-c jc-c">
                        <h3 className="preview__title">{title}</h3>
                        <div className="preview__block">
                            <Icon className="preview__icon" style={styles.icon}>visibility</Icon>
                        </div>
                    </div>
                </ResponsiveBlock>
            </Button>
        </Link>
    );
}
