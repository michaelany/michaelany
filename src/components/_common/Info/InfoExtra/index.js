import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Collapse from 'material-ui/transitions/Collapse';

import './style.css';
import ScrollAnimation from '../../../_common/ScrollAnimation';
import MuiButton from '../../../_common/MuiButton';

export default class InfoExtra extends Component {
    state = {
        isExtraOpen: false
    };

    static propTypes = {
        extra: PropTypes.array.isRequired,
        color: PropTypes.string.isRequired
    };

    handleExtraOpen = () => this.setState({
        isExtraOpen: true
    });

    handleExtraClose = () => this.setState({
        isExtraOpen: false
    });

    render() {
        const {extra, color} = this.props;
        const {isExtraOpen} = this.state;
        const extraContent = extra.map(({id, text}) => <p key={id}>{text}</p>);
        const buttonText = isExtraOpen ? 'Короче' : 'Подробнее';
        return (
            <div className="info-extra">
                <Collapse in={isExtraOpen} timeout={800}>
                    {extraContent}
                </Collapse>
                <ScrollAnimation name="bounceInUp">
                    <MuiButton variant="raised" kind={color} onClick={isExtraOpen ? this.handleExtraClose : this.handleExtraOpen}>
                        {buttonText}
                    </MuiButton>
                </ScrollAnimation>
            </div>
        );
    }
}
