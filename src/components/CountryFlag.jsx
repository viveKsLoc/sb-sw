import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Select from 'react-select';

import '../scss/2-CountryFlag.scss';

export default class CountryFlag extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((res) => { return res.json() })
    .then((data) => { this.setState({ data: data }) })
    .catch((e) => { console.log(e) })
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

    const options = this.state.data.map((item,i) => {
      return {
        value: item.name,
        label:  <div><img alt="" src={item.flag} height="14" width="20" />{item.name}</div>
      }
    })

    return (
      <div className={classNames(classes)}>
        <label className={`${baseClassName}__label`}>Region or country<div/>
          <Select options={options} />
        </label>
      </div>
    )
  }
}

CountryFlag.propTypes = {
  disabled: PropTypes.bool
}