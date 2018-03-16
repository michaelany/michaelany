import React, {Component} from 'react';
import cn from 'classnames';

import './style.css';
import MuiButton from '../../../_common/MuiButton';
import {LINKS} from '../../../../utils/urls';

export default class BioExtra extends Component {
    state = {
        contentHeight: 0
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleContentHeightSet);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleContentHeightSet);
    }

    handleContentHeightSet = () => {
        const {contentHeight} = this.state;
        const blockHeight = this.block.clientHeight;
        if (contentHeight && contentHeight !== blockHeight) this.setState({
            contentHeight: blockHeight + 20
        });
    };

    handleContentHeightToggle = () => this.setState((prevState) => ({
        contentHeight: prevState.contentHeight ? 0 : this.block.clientHeight + 20
    }));

    setBlockRef = (ref) => this.block = ref;

    render() {
        const {contentHeight} = this.state;
        const contentClass = cn('bio-extra__content', {'bio-extra__content_open': contentHeight});
        const contentStyle = {
            height: contentHeight
        };
        const buttonText = contentHeight ? 'Коротко' : 'Подробно';
        return (
            <div className="bio-extra">
                <div className={contentClass} style={contentStyle}>
                    <div className="bio-extra__block" ref={this.setBlockRef}>
                        <p>Первое знакомство с веб-разработкой состоялось в 2003 году когда мне было 13 лет. Проштудировав книгу <a className="link link_color_green" href={LINKS.bio.book} rel="noopener noreferrer" target="_blank">"HTML. Экспресс-курс"</a> я создал свой первый сайт-презентацию для домашнего задания по информатике, проигнорировав PowerPoint. Это был довольно большой проект на чистом HTML без CSS и JS, единственная интерактивность которого заключалась в ссылках.</p>
                        <p>Далее был поиск себя в различных областях не связанных с разработкой и программированием (хотя с 2008 по 2009 год я работал инженером технической поддержки в компании “М.Видео”). После окончания <a className="link link_color_green" href={LINKS.bio.mgupi} rel="noopener noreferrer" target="_blank">МГУПИ</a> (выпуск 2012) поступил на второе высшее во <a className="link link_color_green" href={LINKS.bio.vgik} rel="noopener noreferrer" target="_blank">ВГИК</a> (выпуск 2017). И спустя год учебы в институте кинематографии появился жгучий интерес к веб-технологиям. Я очень удивился и загорелся когда узнал как все двинулось вперед и развивается - фреймворки, SPA, системы сборки и контроля версий, методологии верстки, анимации, препроцессоры, флексы и т.д. Это превратилось в хобби. Но уже очень очень скоро мое новое увлечение стало все больше меня занимать и я решил с головой нырнуть в эту среду. Хобби стало делом всей жизни и я обрел себя.</p>
                        <p>Помимо всего прочего люблю путешествовать со своей девушкой (будущей женой) по миру. За последние два года успели побывать в Таиланде, Париже, Риге, на Крите, в Афинах, Барселоне, Кисловодске, а также совершили пеший поход на Перевал Дятлова.</p>
                    </div>
                </div>
                <MuiButton variant="raised" kind="green" onClick={this.handleContentHeightToggle}>
                    {buttonText}
                </MuiButton>
            </div>
        );
    }
}
