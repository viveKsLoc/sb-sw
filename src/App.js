import React, { Component } from 'react';

import CountryFlag from './components/CountryFlag';
import CountryFlagGlobal from './components/CountryFlagGlobal';
import CountryLanguageSelect from './components/CountryLanguageSelect';
import CountryTextOverlay from './components/CountryTextOverlay';

export default class App extends Component {
    render() {
        return (
            <div>
                <CountryFlag />
                <CountryFlagGlobal />
                <CountryLanguageSelect />
                <CountryTextOverlay />
            </div>
        )
    }
}