import React from 'react';
import Tilt from 'react-tilt';

import './style.css';
import mac from './mac.png';
import mac2x from './mac@2x.png';

const options = {
    max: 60,
    scale: 1,
    speed: 3000,
    reset: false
};

export default function Poster() {
    return (
        <section className="poster section f ai-c jc-c">
            <Tilt {...{options}} easing="cubic-bezier(0.4, 0, 0.2, 1)">
                <img className="poster__image" src={mac} srcSet={`${mac2x} 2x`} alt="Mac" />
            </Tilt>
        </section>
    );
}
