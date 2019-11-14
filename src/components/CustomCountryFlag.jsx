import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import globe from '../flag-globe-blue.svg';
import dropdown from '../icon-dropdown-black.svg';

import '../scss/7-CustomCountryFlag.scss';

class CustomCountryFlag extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            image: 'https://restcountries.eu/data/ind.svg',
            text: 'India',
            isClicked: false,
            isSelected: false
        }
    }

    handleDivClick = (e) => {
        if(this.state.isSelected) {
            this.setState({ isClicked: false });
        } else {
            this.setState({ isClicked: true });
        }
    }

    handleListClick = (e) => {
        if(e.target.innerText === 'See all countries and regions') {
            this.props.callAll();
            this.setState({
                isClicked: false,
                image: e.target.children[0].src,
                text: e.target.innerText,
                isSelected: true
            })
        } else {
            this.setState({
                isClicked: false,
                image: e.target.children[0].src,
                text: e.target.innerText
            })
        }
    }

    handleListAllClick = (e) => {
        this.setState({
            image: e.target.children[0].src,
            text: e.target.innerText,
            isSelected: false
        });
    }

    render() {
        const baseClassName = "pb-custom-flag-select";

        let {
            parentClassName,
            disabled,
            data
        } = this.props;

        let classes = {
            [baseClassName]: true,
            [parentClassName]: parentClassName,
            [`${baseClassName}__content`]: disabled
        };

        const defaultOptions = [
            { name: 'India', flag: 'https://restcountries.eu/data/ind.svg' },
            { name: 'Global', flag: globe },
            { name: 'See all countries and regions', flag: '' }
        ];

        return (
            <div className={classNames(classes)}>
                <div className={`${baseClassName}__content`} onClick={this.handleDivClick}>
                    <img className={`${baseClassName}__content--image`} alt="" src={this.state.image} height='10' width='10' />
                    <span className={`${baseClassName}__content--text`}>{this.state.text}</span>
                    <img className={`${baseClassName}__content--arrow`} alt="" src={dropdown} height='10' width='10' />
                </div>
                {
                    <div
                        className={`${baseClassName}__countries`} 
                        style={{ display: this.state.isClicked ? 'block' : 'none' }}
                    >
                    {
                        this.state.isClicked ?
                        defaultOptions.map((item, index) => {
                            return (
                                <li className={`${baseClassName}__countries--list`} key={index} onClick={this.handleListClick}>
                                    <img className={`${baseClassName}__countries--image`} alt="" src={item.flag} height='10' width='10' />
                                    {item.name}
                                </li>
                            )
                        })
                        :   null
                    }
                    </div>
                }
                {
                    <div
                        className={`${baseClassName}__countries`}
                        style={{ display: this.state.isSelected ? 'block' : 'none' }}
                    >
                    {
                        this.state.isSelected ?
                        data.map((item, index) => {
                            return (
                                <li className={`${baseClassName}__countries--list`} key={index} onClick={this.handleListAllClick}>
                                    <img className={`${baseClassName}__countries--image`} alt="" src={item.flag} height='10' width='10' />
                                    {item.name}
                                </li>
                            )
                        })
                        :   null
                    }
                    </div>
                }
            </div>
        )
    }
}

CustomCountryFlag.propTypes = {
  disabled: PropTypes.bool,
  align: PropTypes.oneOf([
    'right',
    'left'
  ])
}

export default CustomCountryFlag;