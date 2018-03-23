import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import './style.css';
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
            <section className="description section">
                <h2 className={`title title_color_${color}`}>{title}</h2>
                <div className="description__block">
                    <h3 className="subtitle">{subtitle}</h3>
                    {description.map(({id, text}) => <p key={id}>{text}</p>)}
                </div>
                <div className="description__block">
                    <h4 className={subtitleClass}>Технологии</h4>
                    <ul className="list">
                        {technologies.map((technology) => <li key={technology} className="list-item">{technology}</li>)}
                    </ul>
                </div>
                <div className="description__block">
                    <h4 className={subtitleClass}>Дата выхода</h4>
                    <p>{release}</p>
                </div>
                <MuiButton variant="raised" kind={color} onClick={this.handleGoToPortfolio}>
                    Назад
                </MuiButton>
            </section>
        );
    }
}

export default withRouter(Description);