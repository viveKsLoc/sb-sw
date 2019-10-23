import React, { Component } from 'react';
import axios from 'axios';

export default class SelectCountryFlag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then((response) => {
            console.log(response.data);
            this.setState({ data: response.data })
        })
        .catch((e) => { console.log(e) })
    }

    render() {
        return (
            <div>
                <div>
                    <i>WORLDWIDE</i>

                </div>
                <div>
                    <i>ASIA</i>
                </div>
                <div>
                    <i>MIDDLE EAST</i>
                </div>
            </div>
        )
    }
}