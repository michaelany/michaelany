import React from 'react';
import Typist from 'react-typist';
import Grid from 'material-ui/Grid';

import './style.css';
import SkypeIcon from '../_icons/SkypeIcon';
import GitHubIcon from '../_icons/GitHubIcon';
import LinkedInIcon from '../_icons/LinkedInIcon';
import VKIcon from '../_icons/VKIcon';
import ContactMap from './ContactMap';
import SocialLinks from '../_common/SocialLinks';
import {STYLES} from '../../styles/muiTheme';
import {LINKS} from "../../utils/urls";

const links = [
    {id: 1, icon: <SkypeIcon />, url: LINKS.contacts.skype},
    {id: 2, icon: <GitHubIcon />, url: LINKS.social.gitHub},
    {id: 3, icon: <LinkedInIcon />, url: LINKS.social.linkedIn},
    {id: 4, icon: <VKIcon />, url: LINKS.social.vk}
];

export default function Contact() {
    return (
        <div className="contact page page_bg-color_green">
            <Grid container spacing={0} style={STYLES.mainGridContainer}>
                <Grid item xs={12} md={6}>
                    <section className="section section_first">
                        <h2 className="title title_color_white">
                            <Typist startDelay={200}>Контакты</Typist>
                        </h2>
                        <h3 className="contact__subtitle subtitle subtitle_black">Вам нужна моя помощь или у вас есть ко мне вопросы? Напишите мне письмо на <a className="link link_white" href={LINKS.contacts.email}>mclananiev@gmail.com</a></h3>
                        <SocialLinks {...{links}} />
                    </section>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactMap />
                </Grid>
            </Grid>
        </div>
    );
}
