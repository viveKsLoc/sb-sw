import React, { Component } from 'react';
import logo from '../logo.svg'

export default class ImageOverlay extends Component {
    render() {
        return (
            <div>
                <img alt="" src={logo} height="250"/>
            </div>
        )
    }
}