import React, { Component } from 'react';

import CountryFlag from './components/CountryFlag';
import CountryFlagGlobal from './components/CountryFlagGlobal';
import ImageOverlay from './components/ImageOverlay';
import LanguageSelect from './components/LanguageSelect';

export default class App extends Component {
    render() {
        return (
            <div>
                <CountryFlag />
                <CountryFlagGlobal />
                <ImageOverlay />
                <LanguageSelect />
            </div>
        )
    }
}