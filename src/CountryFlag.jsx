import React, { Component } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';

export default class CountryFlag extends Component {
  render() {
    return (
      <div>
        <label>Region or country<div/>
        <ReactFlagsSelect
          defaultCountry="IN"
          countries={["AF", "IN"]}
        />
        </label>
      </div>
    )
  }
}
