import React from 'react';
import {Map, Marker} from 'google-maps-react';

import './style.css';
import marker from './marker.svg';
import mapStyles from '../../../utils/mapStyles';

const initialCenter = {
    lat: 55.7912751,
    lng: 37.814087
};
const styles = {
    map: {
        width: '100%',
        height: '100%'
    }
};

export default function ContactMap() {
    return (
        <section className="contact-map">
            <Map
                google={window.google}
                initialCenter={initialCenter}
                zoom={10}
                disableDefaultUI={true}
                styles={mapStyles}
                style={styles.map}
            >
                <Marker name="Michael Ananiev" icon={{url: marker}} />
            </Map>
        </section>
    );
}
