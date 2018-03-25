import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';

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

    handleDrawerToggle = () => this.setState((prevState) => ({
        isDrawerOpen: !prevState.isDrawerOpen
    }));

    render() {
        const {location: {pathname}} = this.props;
        const {isDrawerOpen} = this.state;
        return (
            <header className={getPanelClass('header', pathname)}>
                <div className="f jc-sb">
                    <Logo panel="header" />
                    <IconButton style={styles.iconButton} onClick={this.handleDrawerToggle}>
                        <Icon style={styles.icon}>menu</Icon>
                    </IconButton>
                </div>
                <Drawer anchor="left" open={isDrawerOpen} onClose={this.handleDrawerToggle}>
                    <div
                        className={getPanelClass('header__drawer', pathname)}
                        tabIndex={0}
                        role="button"
                        onClick={this.handleDrawerToggle}
                        onKeyDown={this.handleDrawerToggle}
                    >
                        <Navigation />
                    </div>
                </Drawer>
            </header>
        );
    }
}

export default withRouter(Header);
