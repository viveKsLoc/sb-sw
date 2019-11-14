import React, { Component } from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import globe from '../flag-globe-blue.svg';

import CustomCountryFlag from '../components/CustomCountryFlag.jsx';

setAddon(JSXAddon);

class CustomCountryFlagStateWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    callAll = () => {
        let allOptions = [{ name: 'Global', flag: globe }];
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => { this.setState({ data: allOptions.concat(data) }) })
        .catch((e) => { console.log(e) });
    }

    render() {
        return (
            <CustomCountryFlag
                {...this.props}
                data={this.state.data}
                callAll={this.callAll}
            />
        )
    }
}

const stories = storiesOf('CustomCountryFlag', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return (
        <CustomCountryFlagStateWrapper
            disabled={disabled}
        />
    )
});