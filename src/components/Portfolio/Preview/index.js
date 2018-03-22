import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Icon from 'material-ui/Icon';

import './style.css';
import ResponsiveBlock from '../../_common/ResponsiveBlock';
import MuiButton from '../../_common/MuiButton';
import urls from '../../../utils/urls';

class Preview extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    };

    handleGoToProject = () => {
        const {history, name} = this.props;
        history.push(`${urls.portfolio}/${name}`);
    };

    render() {
        const {name, title, color} = this.props;
        return (
            <ResponsiveBlock className='preview'>
                <div
                    className={`preview__image preview__image_name_${name}`}
                    role="img"
                    aria-label={title}
                />
                <div className="preview__content f fd-c ai-c jc-c">
                    <h3 className="preview__title">{title}</h3>
                    <div className="preview__block">
                        <MuiButton variant="fab" kind={color} onClick={this.handleGoToProject}>
                            <Icon className="preview__icon">visibility</Icon>
                        </MuiButton>
                    </div>
                </div>
            </ResponsiveBlock>
        );
    }
}

export default withRouter(Preview);
