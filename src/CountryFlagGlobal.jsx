import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';

export default class CountryFlagGlobal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            text: 'Global Site',
            image: logo
        }
    }

    componentDidMount = () => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then((response) => {
            this.setState({ data: response.data })
        })
        .catch((e) => { console.log(e) })
    }

    handleClick = (e) => {
        console.log(e);
        let text = e.target.innerText;
        this.state.data.map((obj, i) => {
            return obj.name === text ? this.setState({
                image: obj.flag,
                text: obj.name
            }) : null
        })
    }

    render() {
        return (
            <div>
                <div>
                    <i>WORLDWIDE</i>
                    <hr />
                    <div>
                        <img alt="" src={this.state.image} height="12" width="16" />
                        <i>{this.state.text}</i>
                    </div>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <i>ASIA</i>
                    <hr />
                    {this.state.data.map((obj, i) => {
                        return obj.region === 'Asia' ?
                            (
                                <div key={obj.name} onClick={this.handleClick}>
                                    <img alt="" src={obj.flag} height="12" width="16" />
                                    <i>{obj.name}</i>
                                </div>
                            )
                            :   null
                    })}
                </div>
            </div>
        )
    }
}