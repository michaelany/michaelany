import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import './style.css';
import ResponsiveBlock from '../../_common/ResponsiveBlock';
import urls from '../../../utils/urls';

const styles = {
    button: {
        overflow: 'hidden',
        display: 'block',
        transition: 'none',
        color: 'white'
    },
    icon: {
        color: 'white',
        fontSize: 40
    }
};

class Preview extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };

    handleGoToProject = () => {
        const {history, name} = this.props;
        history.push(`${urls.portfolio}/${name}`);
    };

    render() {
        const {name, title} = this.props;
        return (
            <Button className="preview" component="a" role="link" style={styles.button} onClick={this.handleGoToProject}>
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
        );
    }
}

export default withRouter(Preview);
