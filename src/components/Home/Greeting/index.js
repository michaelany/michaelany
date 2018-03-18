import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import MuiButton from '../../_common/MuiButton';

Greeting.propTypes = {
    onGoToPortfolio: PropTypes.func.isRequired,
    onGoToContact: PropTypes.func.isRequired
};

export default function Greeting({onGoToPortfolio, onGoToContact}) {
    return (
        <section className="greeting section f fd-c jc-c">
                <div className="greeting__hello title">Привет,</div>
                <h1 className="greeting__title title">
                    меня зовут<br />
                    <span className="greeting__letter">М</span>
                    ихаил <span className="greeting__letter">А</span>наньев,<br />
                    я веб-разработчик
                </h1>
                <h2 className="subtitle">Front-End Developer / React JS</h2>
                <div>
                    <MuiButton isMargin variant="raised" kind="green" onClick={onGoToPortfolio}>Портфолио</MuiButton>
                    <MuiButton variant="raised" kind="blue" onClick={onGoToContact}>Контакты</MuiButton>
                </div>
        </section>
    );
}
