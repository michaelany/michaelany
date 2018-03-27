import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style.css';
import ScrollAnimation from '../../../_common/ScrollAnimation';
import MuiButton from '../../../_common/MuiButton';

export default class InfoExtra extends Component {
    state = {
        contentHeight: 0
    };

    static propTypes = {
        extra: PropTypes.array.isRequired,
        color: PropTypes.string.isRequired
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleContentHeightSet);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleContentHeightSet);
    }

    handleContentHeightSet = () => {
        const {contentHeight} = this.state;
        const blockHeight = this.block.clientHeight;
        if (contentHeight && contentHeight !== blockHeight) this.setState({
            contentHeight: blockHeight + 20
        });
    };

    handleContentHeightToggle = () => this.setState((prevState) => ({
        contentHeight: prevState.contentHeight ? 0 : this.block.clientHeight + 20
    }));

    setBlockRef = (ref) => this.block = ref;

    render() {
        const {extra, color} = this.props;
        const {contentHeight} = this.state;
        const contentClass = cn('info-extra__content', {'info-extra__content_open': contentHeight});
        const contentStyle = {
            height: contentHeight
        };
        const extraContent = extra.map(({id, text}) => <p key={id}>{text}</p>);
        const buttonText = contentHeight ? 'Короче' : 'Подробнее';
        return (
            <div className="info-extra">
                <div className={contentClass} style={contentStyle}>
                    <div className="info-extra__block" ref={this.setBlockRef}>
                        {extraContent}
                    </div>
                </div>
                <ScrollAnimation name="bounceInUp">
                    <MuiButton variant="raised" kind={color} onClick={this.handleContentHeightToggle}>
                        {buttonText}
                    </MuiButton>
                </ScrollAnimation>
            </div>
        );
    }
}
