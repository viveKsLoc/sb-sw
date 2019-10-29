import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class CountryFlagSelect extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showAll: false
    }
  }

  callCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((response) => response.json())
    .then((data) => { this.setState({ data, showAll: true }) })
    .catch((e) => { console.log(e) })
  }

  handleOnChange = (e) => {
    if(e.target.value === 'All') {
      this.callCountries();
    }
  }

  render() {
    let baseClassName = "pb-country-flag";

    let {
      parentClassName,
      disabled
    } = this.props;

    let classes = {
      [baseClassName]: true,
      [parentClassName]: parentClassName,
      [`${baseClassName}--disabled`]: disabled
    }

    let options = [
      { value: "India", name: "India" },
      { value: "Global", name: "Global" },
      { value: "All", name: "See all countries and regions" }
    ]

    return (
      <div className={classNames(classes)}>
        <label>Region or country<div/>
          <select onChange={this.handleOnChange}>
          {
            this.state.showAll
            ? this.state.data.map((obj, i) => <option key={i} value={obj.name}>{obj.name}</option>)
            : options.map((obj, i) => <option key={i} value={obj.value}>{obj.name}</option>)
          }
          </select>
        </label>
      </div>
    )
  }
}

CountryFlagSelect.propTypes = {
  disabled: PropTypes.bool
}