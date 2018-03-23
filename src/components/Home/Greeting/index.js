import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import './style.css';
import MuiButton from '../../_common/MuiButton';
import urls from "../../../utils/urls";

class Greeting extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    handleGoToPortfolio = () => this.props.history.push(urls.portfolio);

    handleGoToContact = () => this.props.history.push(urls.contact);

    render() {
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
                    <MuiButton isMargin variant="raised" kind="blue" onClick={this.handleGoToPortfolio}>
                        Портфолио
                    </MuiButton>
                    <MuiButton variant="raised" kind="green" onClick={this.handleGoToContact}>
                        Контакты
                    </MuiButton>
                </div>
            </section>
        );
    }
}

export default withRouter(Greeting);