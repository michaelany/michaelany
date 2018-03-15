import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import cn from 'classnames';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';

import './style.css';
import urls from '../../utils/urls';

const navLinks = [
    {id: 1, name: 'Главная', icon: 'home', url: urls.home},
    {id: 2, name: 'Обо мне', icon: 'person', url: urls.about},
    {id: 3, name: 'Навыки', icon: 'school', url: urls.skills},
    {id: 4, name: 'Опыт', icon: 'work', url: urls.experience},
    {id: 5, name: 'Портфолио', icon: 'visibility', url: urls.portfolio},
    {id: 6, name: 'Контакты', icon: 'mail', url: urls.contact}
];

const renderLinks = () => navLinks.map(({id, name, url, icon}) => (
    <li key={id}>
        <Tooltip title={name} placement="right" enterDelay={300} leaveDelay={100}>
            <Button fullWidth component="div" role="link" tabIndex={null}>
                <NavLink exact className="sidebar__link fb-100" activeClassName="sidebar__link_active" to={url}>
                    <Icon>{icon}</Icon>
                </NavLink>
            </Button>
        </Tooltip>
    </li>
));

function Sidebar({location}) {
    const sidebarClass = cn('sidebar', {
        'sidebar_yellow': location.pathname === '/',
        'sidebar_green': location.pathname === '/about',
        'sidebar_blue': location.pathname === '/contact'
    });
    return (
        <aside className={sidebarClass}>
            <NavLink className="sidebar__logo" to={urls.home}>MA</NavLink>
            <nav>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
        </aside>
    );
}

export default withRouter(Sidebar);
