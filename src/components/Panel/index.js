import React from 'react';
import MediaQuery from 'react-responsive';

import Sidebar from './Sidebar';
import Header from './Header';

const renderPanel = (matches) => matches
    ? <Header>Media query matches!</Header>
    : <Sidebar />;

export default function Bar() {
    return (
        <MediaQuery maxWidth={959}>
            {renderPanel}
        </MediaQuery>
    );
}
