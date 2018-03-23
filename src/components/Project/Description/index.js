import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './style.css';
import MuiButton from '../../_common/MuiButton';
import urls from '../../../utils/urls';

Description.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    technologies: PropTypes.array.isRequired,
    release: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default function Description({title, subtitle, description, technologies, release, color}) {
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
            <Link to={urls.portfolio}>
                <MuiButton variant="raised" kind={color}>Назад</MuiButton>
            </Link>
        </section>
    );
}