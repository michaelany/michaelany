import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Typist from 'react-typist';

import './style.css';
import MuiButton from '../../_common/MuiButton';
import urls from "../../../utils/urls";

const styles = {
    button: {
        marginTop: 10
    }
};

class Greeting extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    handleGoToPortfolio = () => this.props.history.push(urls.portfolio);

    handleGoToContact = () => this.props.history.push(urls.contact);

    render() {
        return (
            <section className="greeting section section_first f fd-c jc-c">
                <Typist cursor={{show: false}}>
                    <div className="greeting__title">Привет,</div>
                </Typist>
                <Typist cursor={{show: false}} startDelay={1000}>
                    <h1 className="greeting__title greeting__title_name">меня зовут</h1>
                </Typist>
                <h1 className="greeting__title greeting__title_name">
                    <span className="greeting__name greeting__name_first">
                        <span className="greeting__letter">М</span>ихаил
                    </span>
                    &nbsp;
                    <span className="greeting__name greeting__name_last">
                        <span className="greeting__letter">А</span>наньев,
                    </span>
                </h1>
                <Typist cursor={{show: false}} startDelay={3200}>
                    <h1 className="greeting__title greeting__title_name">я веб-разработчик</h1>
                </Typist>
                <h2 className="greeting__subtitle">Front-End Developer / React JS</h2>
                <div className="greeting__buttons">
                    <MuiButton isMargin variant="raised" kind="blue" style={styles.button} onClick={this.handleGoToPortfolio}>
                        Портфолио
                    </MuiButton>
                    <MuiButton variant="raised" kind="green" style={styles.button} onClick={this.handleGoToContact}>
                        Контакты
                    </MuiButton>
                </div>
            </section>
        );
    }
}

export default withRouter(Greeting);