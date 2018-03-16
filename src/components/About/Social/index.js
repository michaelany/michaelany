import React from 'react';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';

import './style.css';
import me from './me.jpg';
import me2x from './me@2x.jpg';
import GitHubIcon from '../../_icons/GitHubIcon';
import LinkedInIcon from '../../_icons/LinkedInIcon';
import GlyphsIcon from '../../_icons/GlyphsIcon';
import VKIcon from '../../_icons/VKIcon';
import MuiButton from '../../_common/MuiButton';
import {LINKS} from "../../../utils/urls";

const links = [
    {id: 1, name: 'Профиль GitHub', icon: <GitHubIcon />, url: LINKS.social.gitHub, tooltip: 'left'},
    {id: 2, name: 'Профиль LinkedIn', icon: <LinkedInIcon />, url: LINKS.social.linkedIn, tooltip: 'bottom'},
    {id: 3, name: 'Команда 7 glyphs', icon: <GlyphsIcon />, url: LINKS.social.sevenGlyphs, tooltip: 'bottom'},
    {id: 4, name: 'Профиль VK', icon: <VKIcon />, url: LINKS.social.vk, tooltip: 'right'}
];

const styles = {
    avatar: {
        width: 'auto',
        height: 'auto',
        maxWidth: 320,
        marginBottom: 20
    }
};

const renderLinks = () => links.map(({id, name, icon, url, tooltip}) => (
    <li key={id} className="social__item">
        <Tooltip title={name} placement={tooltip} enterDelay={300} leaveDelay={100}>
            <MuiButton component="a" variant="fab" href={url} rel="noopener noreferrer" target="_blank" role="link">
                {icon}
            </MuiButton>
        </Tooltip>
    </li>
));

export default function Bio() {
    return (
        <section className="social section section_background_green">
            <div className="social__content f fd-c ai-c jc-c">
                <Avatar src={me} srcSet={`${me2x} 2x`} style={styles.avatar} />
                <ul className="f">{renderLinks()}</ul>
            </div>
        </section>
    );
}
