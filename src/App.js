import React, { Component } from 'react';

// import CountryFlag from './CountryFlag';
// import ImageOverlay from './ImageOverlay';
import CountryFlagGlobal from './CountryFlagGlobal';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <CountryFlag />
                <ImageOverlay /> */}
                <CountryFlagGlobal />
            </div>
        )
    }
}