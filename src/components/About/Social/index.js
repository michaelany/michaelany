import React from 'react';
import Avatar from 'material-ui/Avatar';

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
    {id: 1, icon: <GitHubIcon />, url: LINKS.social.gitHub},
    {id: 2, icon: <LinkedInIcon />, url: LINKS.social.linkedIn},
    {id: 3, icon: <GlyphsIcon />, url: LINKS.experience.sevenGlyphs},
    {id: 4, icon: <VKIcon />, url: LINKS.social.vk}
];

const styles = {
    avatar: {
        width: 'auto',
        height: 'auto',
        maxWidth: 320,
        marginBottom: 20
    }
};

const renderLinks = () => links.map(({id, name, icon, url}) => (
    <li key={id} className="social__item">
        <MuiButton
            component="a"
            variant="fab"
            kind="white"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            role="link"
        >
            {icon}
        </MuiButton>
    </li>
));

export default function Bio() {
    return (
        <section className="social section section_bg-color_green">
            <div className="container f fd-c ai-c jc-c">
                <Avatar src={me} srcSet={`${me2x} 2x`} style={styles.avatar} />
                <ul className="f">{renderLinks()}</ul>
            </div>
        </section>
    );
}
