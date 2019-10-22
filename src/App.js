import React, { Component } from 'react';

import CountryFlag from './CountryFlag';
import ImageOverlay from './ImageOverlay';
import SelectCountryFlag from './SelectCountryFlag';

export default class App extends Component {
    render() {
        return (
            <div>
                <CountryFlag />
                <ImageOverlay />
                <SelectCountryFlag />
            </div>
        )
    }
}