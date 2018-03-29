import React from 'react';
import Avatar from 'material-ui/Avatar';

import './style.css';
import me from './me.jpg';
import me2x from './me@2x.jpg';
import meSmile from './me-smile.jpg';
import meSmile2x from './me-smile@2x.jpg';
import GitHubIcon from '../../_icons/GitHubIcon';
import LinkedInIcon from '../../_icons/LinkedInIcon';
import GlyphsIcon from '../../_icons/GlyphsIcon';
import VKIcon from '../../_icons/VKIcon';
import SocialLinks from '../../_common/SocialLinks';
import ScrollAnimation from '../../_common/ScrollAnimation';
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
        height: 'auto'
    }
};

export default function Social() {
    return (
        <section className="social section section_bg-color_green">
            <div className="f fd-c ai-c jc-c">
                <ScrollAnimation className="social__avatar" name="rollIn">
                    <Avatar src={me} srcSet={`${me2x} 2x`} style={styles.avatar} />
                    <Avatar className="social__secret" src={meSmile} srcSet={`${meSmile2x} 2x`} style={styles.avatar} />
                </ScrollAnimation>
                <SocialLinks isRound {...{links}} />
            </div>
        </section>
    );
}
