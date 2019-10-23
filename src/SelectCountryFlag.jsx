import React, { Component } from 'react';
import axios from 'axios';

export default class SelectCountryFlag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            text: 'Global Site',
            image: ''
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
                    <div>
                        <img alt="" src={this.state.image} height="12" width="16" />
                        <i>{this.state.text}</i>
                    </div>
                </div>
                <div>
                    <i>ASIA</i>
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
                <div>
                    <i>MIDDLE EAST</i>
                    {this.state.data.map((obj,i) => {
                        return (
                            <div key={obj.name}>
                                {obj.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}