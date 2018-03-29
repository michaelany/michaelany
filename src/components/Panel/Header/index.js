import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';

import './style.css';
import Logo from '../../_common/Logo';
import Navigation from '../../_common/Navigation';
import {getPanelClass} from '../../../utils/helpers';
import {COLORS} from '../../../styles/muiTheme';
const styles = {
    iconButton: {
        width: 72,
        height: 72,
        color: COLORS.black
    },
    icon: {
        fontSize: 40
    }
};

class Header extends Component {
    state = {
        isDrawerOpen: false
    };

    static propTypes = {
        location: PropTypes.object.isRequired
    };

    handleDrawerOpen = () => this.setState({
        isDrawerOpen: true
    });

    handleDrawerClose = () => this.setState({
        isDrawerOpen: false
    });

    render() {
        const {location: {pathname}} = this.props;
        const {isDrawerOpen} = this.state;
        return (
            <header className={getPanelClass('header', pathname)}>
                <div className="f jc-sb">
                    <IconButton style={styles.iconButton} onClick={this.handleDrawerOpen}>
                        <Icon style={styles.icon}>menu</Icon>
                    </IconButton>
                    <Logo panel="header" />
                </div>
                <SwipeableDrawer
                    anchor="left"
                    open={isDrawerOpen}
                    onOpen={this.handleDrawerOpen}
                    onClose={this.handleDrawerClose}
                >
                    <div
                        className={getPanelClass('header__drawer', pathname)}
                        tabIndex={0}
                        role="button"
                        onClick={this.handleDrawerClose}
                        onKeyDown={this.handleDrawerClose}
                    >
                        <Navigation isDrawer />
                    </div>
                </SwipeableDrawer>
            </header>
        );
    }
}

export default withRouter(Header);
