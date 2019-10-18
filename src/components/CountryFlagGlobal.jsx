import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

import '../scss/3-CountryFlagGlobal.scss';

export default class CountryFlagGlobal extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            text: 'Global Site',
            image: logo
        }
    }

    handleClick = (e) => {
        let text = e.target.innerText;
        this.props.countries.map((obj, i) => {
            return obj.name === text ? this.setState({
                image: obj.flag,
                text: obj.name
            }) : null
        })
    }

    handleAllOfAsia = () => {
        this.props.callAllOfAsia();
    }

    render() {
        let baseClassName = "pb-country-flag-global";

        let {
            parentClassName,
            disabled,
            countries
        } = this.props;

        let classes = {
            [baseClassName]: true,
            [parentClassName]: parentClassName,
            [`${baseClassName}__asia`]: disabled
        }

        return (
            <div className={classNames(classes)}>
                <div className={`${baseClassName}__side-content`}>
                    <img className={`${baseClassName}__side-content-image`} alt="" src={logo} height="250" width="250" /><div/>
                    <i className={`${baseClassName}__side-content-text`}>Some long text needs to go here.</i>
                </div>
                <div className={`${baseClassName}__world-wide`}>
                    <i className={`${baseClassName}__world-wide-header`}>WORLDWIDE</i>
                    <hr className={`${baseClassName}__world-wide-divider`} />
                    <div className={`${baseClassName}__world-wide-content`}>
                        <img className={`${baseClassName}__world-wide-content-image`} alt="" src={this.state.image} height="12" width="16" />
                        <i className={`${baseClassName}__world-wide-content-text`}>{this.state.text}</i>
                    </div>
                </div>
                <div className={`${baseClassName}__asia`}>
                    <i className={`${baseClassName}__asia-header`}>ASIA</i>
                    <hr className={`${baseClassName}__asia-divider`} />
                    {countries.map((obj, i) => {
                        return (
                            <div className={`${baseClassName}__asia-content`} key={i} onClick={this.handleClick}>
                                <img className={`${baseClassName}__asia-content-image`} alt="" src={obj.flag} height="12" width="16" />
                                <i className={`${baseClassName}__asia-content-text`}>{obj.name}</i>
                            </div>
                        )
                    })}
                    {this.props.showAllOfAsia ? null
                        :   <div className={`${baseClassName}__all-content`} onClick={this.handleAllOfAsia}>
                                <img className={`${baseClassName}__all-content-image`} alt="" src={logo} height="12" width="16" />
                                <i className={`${baseClassName}__all-content-text`}>All of asia</i>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

CountryFlagGlobal.propTypes = {
    disabled: PropTypes.bool,
    countries: PropTypes.arrayOf(PropTypes.object)
}