import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import cn from 'classnames';

import './style.css';

export default class ScrollAnimation extends Component {
    state = {
        isReach: false
    };

    static propTypes = {
        children: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
        duration: PropTypes.number,
        delay: PropTypes.number,
        offset: PropTypes.number,
        enterFunction: PropTypes.func
    };

    static defaultProps = {
        className: '',
        duration: 800,
        delay: 0,
        offset: 0,
        enterFunction: null
    };

    handleWaypointEnter = () => {
        const {enterFunction} = this.props;
        !this.state.isReach && this.setState({isReach: true});
        enterFunction && enterFunction();
    };

    render() {
        const {children, name, className, duration, delay, offset} = this.props;
        const {isReach} = this.state;
        return (
            <div className={cn('scroll-animation', className)}
                 style={isReach ? {animation: `${name} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms forwards`} : null}>
                <Waypoint bottomOffset={offset} onEnter={this.handleWaypointEnter}/>
                {children}
            </div>
        );
    }
}

