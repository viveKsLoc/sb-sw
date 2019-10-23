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
                    <div>
                        <i>Golbal Site</i>
                    </div>
                </div>
                <div>
                    <i>ASIA</i>
                    {this.state.data.map((obj, i) => {
                        return obj.region === 'Asia' ?
                            (
                                <div key={obj.name}>
                                    <img alt="" src={obj.flag} height="20" width="20" />
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