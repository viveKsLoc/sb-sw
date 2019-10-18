import React, { Component } from 'react';

import CountryFlag from './components/CountryFlag';
import CountryFlagGlobal from './components/CountryFlagGlobal';
import CountryFlagSelect from './components/CountryFlagSelect';
import LanguageSelect from './components/LanguageSelect';
import ImageOverlay from './components/ImageOverlay';

export default class App extends Component {
    render() {
        return (
            <div>
                <CountryFlag />
                <CountryFlagGlobal />
                <CountryFlagSelect />
                <LanguageSelect />
                <ImageOverlay />
            </div>
        )
    }
}