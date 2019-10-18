import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Select from 'react-select';
import logo from '../logo.svg';

import '../scss/2-CountryFlag.scss';

export default class CountryFlag extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isClicked: false
    }
  }

  componentDidMount = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((res) => { return res.json() })
    .then((data) => { this.setState({ data: data }) })
    .catch((e) => { console.log(e) })
  }

  callAll = (e) => {
    if(e) {
      this.setState({ isClicked: true })
    }
  }

  render() {
    let baseClassName = "pb-country-flag";

    let {
      data,
      isClicked
    } = this.state;

    let {
      parentClassName,
      disabled
    } = this.props;

    let classes = {
      [baseClassName]: true,
      [parentClassName]: parentClassName,
      [`${baseClassName}--disabled`]: disabled
    }

    console.log(this.state.data);

    const defaultValue = [
      {
        value: 'India',
        label: <div><img className="flag-component__image" alt="" src="https://restcountries.eu/data/ind.svg" height="14" width="20" />India</div>
      }
    ]

    const defaultOptions = [
      {
        value: 'India',
        label: <div className="flag-component"><img className="flag-component__image" alt="" src="https://restcountries.eu/data/ind.svg" height="14" width="20" /><span className="flag-component__content">India</span></div>
      },
      {
        value: 'Global',
        label: <div className="flag-component"><img className="flag-component__image" alt="" src={logo} height="14" width="20" />Global</div>
      },
      {
        value: 'Show All Countries or Regions',
        label: <div onClick={this.callAll}>Show All Countries or Regions</div>
      }
    ]

    const options = data.map((item,i) => {
      return {
        value: item.name,
        label:  <div><img alt="" src={item.flag} height="14" width="20" />{item.name}</div>
      }
    })

    let globalOption = [
      {
        value: 'Global',
        label: <div><img alt="" src={logo} height="14" width="20" />Global</div>
      }
    ]

    let allOptions = globalOption.concat(options);

    const colourStyles = {
      control: styles => ({ ...styles,
        backgroundColor: 'blue'
      })
    }

    return (
      <div className={classNames(classes)}>
        <label className={`${baseClassName}__label`}>Region or country<div/>
          <Select
            defaultValue={defaultValue}
            options={isClicked ? allOptions : defaultOptions}
            styles={colourStyles}
          />
        </label>
      </div>
    )
  }
}

CountryFlag.propTypes = {
  disabled: PropTypes.bool
}