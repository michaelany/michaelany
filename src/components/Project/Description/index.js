import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Typist from 'react-typist';

import './style.css';
import ScrollAnimation from '../../_common/ScrollAnimation';
import MuiButton from '../../_common/MuiButton';
import urls from '../../../utils/urls';

class Description extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.array.isRequired,
        technologies: PropTypes.array.isRequired,
        release: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    };

    handleGoToPortfolio = () => this.props.history.push(urls.portfolio);

    render() {
        const {title, subtitle, description, technologies, release, color} = this.props;
        const subtitleClass = `description__subtitle description__subtitle_color_${color}`;
        return (
            <section className="description section section_first">
                <h2 className={`title title_color_${color}`}>
                    <Typist startDelay={200}>{title}</Typist>
                </h2>
                <h3 className="subtitle">{subtitle}</h3>
                <div className="description__block">
                    {description.map(({id, text}) => <p key={id}>{text}</p>)}
                </div>
                <div className="description__block">
                    <h4 className={subtitleClass}>Технологии</h4>
                    <ul className="list list_project">
                        {technologies.map((technology) => <li key={technology} className="list-item">{technology}</li>)}
                    </ul>
                </div>
                <div className="description__block">
                    <h4 className={subtitleClass}>Дата выхода</h4>
                    <p>{release}</p>
                </div>
                <ScrollAnimation name="bounceInUp">
                    <MuiButton variant="raised" kind={color} onClick={this.handleGoToPortfolio}>
                        Назад
                    </MuiButton>
                </ScrollAnimation>
            </section>
        );
    }
}

export default withRouter(Description);