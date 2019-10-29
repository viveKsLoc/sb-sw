import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

export default class CountryFlagGlobal extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            text: 'Global Site',
            image: logo
        }
    }

    componentDidMount = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => this.setState({ data }))
        .catch((e) => { console.log(e) })
    }

    handleClick = (e) => {
        let text = e.target.innerText;
        this.state.data.map((obj, i) => {
            return obj.name === text ? this.setState({
                image: obj.flag,
                text: obj.name
            }) : null
        })
    }

    render() {
        let baseClassName = "pb-country-flag-global";

        let {
            parentClassName,
            disabled
        } = this.props;

        let classes = {
            [baseClassName]: true,
            [parentClassName]: parentClassName,
            [`${baseClassName}__asia`]: disabled
        }

        return (
            <div className={classNames(classes)}>
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
                    {this.state.data.map((obj, i) => {
                        return obj.region === 'Asia' ?
                            (
                                <div className={`${baseClassName}__asia-content`} key={obj.name} onClick={this.handleClick}>
                                    <img className={`${baseClassName}__asia-content-image`} alt="" src={obj.flag} height="12" width="16" />
                                    <i className={`${baseClassName}__asia-content-text`}>{obj.name}</i>
                                </div>
                            )
                            :   null
                    })}
                </div>
            </div>
        )
    }
}

CountryFlagGlobal.propTypes = {
    disabled: PropTypes.bool
}