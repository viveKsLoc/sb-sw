import React from 'react';

import '../scss/7-CustomCountryFlag.scss';

class CustomCountryFlag extends React.Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            image: 'https://restcountries.eu/data/ind.svg',
            text: 'India',
            isClicked: false,
            isSelected: false
        }
    }

    callAll = () => {
        let allOptions = [{ name: 'Global', value: 'global', flag: '' }];
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => { this.setState({ data: allOptions.concat(data) }) })
        .catch((e) => { console.log(e) })
    }

    handleDivClick = (e) => {
        this.setState({ isClicked: true })
    }

    handleListClick = (e) => {
        if(e.target.innerText === 'Show all countries or regions') {
            this.setState({ isSelected: true })
            this.callAll()
        }
        this.setState({ image: e.target.children[0].src });
        this.setState({ text: e.target.innerText })
    }

    render() {

        const defaultOptions = [
            { name: 'India', value: 'india', flag: 'https://restcountries.eu/data/ind.svg' },
            { name: 'Global', value: 'global', flag: '' },
            { name: 'Show all countries or regions', value: 'all', flag: '' }
        ]

        return (
            <div>
                <div onClick={this.handleDivClick}>
                    <img alt="" src={this.state.image} height="10" width="14" />
                    <span>{this.state.text}</span>
                    <i className="fa fa-angle-down"></i>
                </div>
                <ul id="countries">
                {
                    this.state.isClicked && !this.state.isSelected ?
                    defaultOptions.map((item, index) => {
                        return (
                            <li key={index} onClick={this.handleListClick} value={item.value}>
                                <img alt="" src={item.flag} height="10" width="14" />
                                {item.name}
                            </li>
                        )
                    })
                    :   null
                }
                {
                    this.state.isSelected ?
                    this.state.data.map((item, index) => {
                        return (
                            <li key={index} style={{ listStyleType: "none",padding:'4px' }} onClick={this.handleListClick}>
                                <img alt="" src={item.flag} height="10" width="14" />
                                {item.name}
                            </li>
                        )
                    })
                    :   null
                }
                </ul>
            </div>
        )
    }
}

export default CustomCountryFlag;