import React, { Component } from 'react';
import JSXAddon from 'storybook-addon-jsx';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CountryFlagGlobal from '../components/CountryFlagGlobal.jsx';

setAddon(JSXAddon);

export class CountryFlagGlobalStateWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            showAllOfAsia: false
        }
    }

    componentDidMount = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => {
            let asiaData = [];
            data.map((obj, i) => {
                return obj.region === 'Asia' ? asiaData.push(obj) : null
            })
            let asia = asiaData.slice(0,10);
            this.setState({ data: asia })
        })
        .catch((e) => { console.log(e) })
    }

    callAllOfAsia = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ data: [] })
            let asiaData = [];
            data.map((obj, i) => {
                return obj.region === 'Asia' ? asiaData.push(obj) : null
            })
            this.setState({ data: asiaData, showAllOfAsia: true })
        })
        .catch((e) => { console.log(e) })
    }

    render() {
        return (
            <CountryFlagGlobal
                {...this.props}
                countries={this.state.data}
                showAllOfAsia={this.state.showAllOfAsia}
                callAllOfAsia={this.callAllOfAsia}
            />
        )
    }
}

const stories = storiesOf('CountryFlagGlobal', module);

stories.addDecorator(withKnobs);

stories.addWithJSX('Default', () => {
    const disabled = boolean('Disabled?');

    return (
        <CountryFlagGlobalStateWrapper
            disabled={disabled}
        />
    )
});