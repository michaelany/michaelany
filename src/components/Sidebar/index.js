import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, withRouter} from 'react-router-dom';
import cn from 'classnames';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';

import './style.css';
import urls from '../../utils/urls';

const navLinks = [
    {id: 1, title: 'Главная', icon: 'home', url: urls.home},
    {id: 2, title: 'Обо мне', icon: 'person', url: urls.about},
    {id: 3, title: 'Навыки', icon: 'school', url: urls.skills},
    {id: 4, title: 'Опыт', icon: 'work', url: urls.experience},
    {id: 5, title: 'Портфолио', icon: 'visibility', url: urls.portfolio},
    {id: 6, title: 'Контакты', icon: 'mail', url: urls.contact}
];

Sidebar.propTypes = {
    location: PropTypes.object.isRequired
};

const renderLinks = () => navLinks.map(({id, title, url, icon}) => (
    <li key={id}>
        <Tooltip {...{title}} placement="right" enterDelay={300} leaveDelay={100}>
            <Button fullWidth component="div" role="link" tabIndex="-1">
                <NavLink exact={url !== urls.portfolio} className="sidebar__link fb-100" activeClassName="sidebar__link_active" to={url}>
                    <Icon>{icon}</Icon>
                </NavLink>
            </Button>
        </Tooltip>
    </li>
));

const getSidebarClass = (pathname) => cn(`sidebar sidebar_page_${pathname.split('/')[1] || 'home'}`, {
    'sidebar_various': pathname === '/',
    'sidebar_red': pathname === '/portfolio/lazy-az' || pathname === '/portfolio/my-portfolio',
    'sidebar_yellow': pathname === '/portfolio/lazy-az-dashboard'
        || pathname === '/portfolio/12-saffron',
    'sidebar_grass': pathname === '/portfolio/7-glyphs' || pathname === '/portfolio/service-packages',
    'sidebar_green': pathname === '/about' || pathname === '/portfolio/whip-around',
    'sidebar_blue': pathname === '/skills' || pathname === '/portfolio/msp',
    'sidebar_violet': pathname === '/experience' || pathname === '/portfolio/fcdc-dashboard'
});

function Sidebar({location: {pathname}}) {
    return (
        <aside className={getSidebarClass(pathname)}>
            <NavLink className="sidebar__logo" to={urls.home}>MA</NavLink>
            <nav className="sidebar__navigation">
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
        </aside>
    );
}

export default withRouter(Sidebar);
