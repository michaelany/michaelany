import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import InfoExtra from './InfoExtra';

Info.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    extra: PropTypes.array
};

const renderItems = (items) => items.map(({id, text, subItems}) => {
    return (
        <li key={id} className="list-item">
            {text}
            {subItems && <ul className="info__sublist">{renderSubItems(subItems)}</ul>}
        </li>
    );
});

const renderSubItems = (subItems) => subItems.map(({id, text}) => (
    <li key={id} className="info__sub-item">{text}</li>
));

export default function Info({title, subtitle, color, items, extra = null}) {
    return (
        <section className="info section section_first">
            <h2 className={`title title_color_${color}`}>{title}</h2>
            <h3 className="subtitle">{subtitle}</h3>
            <ul className="list">
                {renderItems(items)}
            </ul>
            {extra && <InfoExtra {...{extra, color}} />}
        </section>
    );
}