import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/scss/react-flags-select.scss';

import '../scss/2-CountryFlag.scss';

export default class CountryFlag extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {

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

    return (
      <div className={classNames(classes)}>
        <label className={`${baseClassName}__label`}>Region or country<div/>
        <ReactFlagsSelect
          defaultCountry="IN"
          countries={["AF", "IN"]}
        />
        </label>
      </div>
    )
  }
}

CountryFlag.propTypes = {
  disabled: PropTypes.bool
}