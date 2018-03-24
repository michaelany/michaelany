import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import './style.css';
import urls from "../../../utils/urls";
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

export default class Header extends Component {
    state = {
        isDrawerOpen: false
    };
    render() {
        return (
            <header className="header f jc-sb">
                <NavLink className="header__logo logo" to={urls.home}>MA</NavLink>
                <IconButton style={styles.iconButton}>
                    <Icon style={styles.icon}>menu</Icon>
                </IconButton>
            </header>
        );
    }
}
