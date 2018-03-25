import React from 'react';
import Avatar from 'material-ui/Avatar';

import me from './me.jpg';
import me2x from './me@2x.jpg';
import GitHubIcon from '../../_icons/GitHubIcon';
import LinkedInIcon from '../../_icons/LinkedInIcon';
import GlyphsIcon from '../../_icons/GlyphsIcon';
import VKIcon from '../../_icons/VKIcon';
import SocialLinks from '../../_common/SocialLinks';
import {LINKS} from "../../../utils/urls";

const links = [
    {id: 1, title: 'Профиль GitHub', icon: <GitHubIcon />, url: LINKS.social.gitHub, placement: 'left'},
    {id: 2, title: 'Профиль LinkedIn', icon: <LinkedInIcon />, url: LINKS.social.linkedIn, placement: 'bottom'},
    {id: 3, title: 'Команда 7 glyphs', icon: <GlyphsIcon />, url: LINKS.experience.sevenGlyphs, placement: 'bottom'},
    {id: 4, title: 'Профиль VK', icon: <VKIcon />, url: LINKS.social.vk, placement: 'right'}
];

const styles = {
    avatar: {
        width: 'auto',
        height: 'auto',
        maxWidth: 320,
        marginBottom: 20
    }
};

export default function Social() {
    return (
        <section className="social section section_bg-color_green">
            <div className="f fd-c ai-c jc-c">
                <Avatar src={me} srcSet={`${me2x} 2x`} style={styles.avatar} />
                <SocialLinks isRound {...{links}} />
            </div>
        </section>
    );
}
