import React from 'react';

import './style.css';
import mac from './mac.png';

export default function Poster() {
    return (
        <section className="poster section f fd-c jc-c">
            <img className="poster__image" src={mac} alt="mac" />
        </section>
    );
}
