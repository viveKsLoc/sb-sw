import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import logo from '../logo.svg'

export default class ImageOverlay extends Component {
    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let baseClassName = "pb-image-overlay";

        let {
            parentClassName,
            disabled
        } = this.props;

        let classes = {
            [baseClassName]: true,
            [parentClassName]: parentClassName,
            [`${baseClassName}--disabled`]: disabled
        }

        return (
            <div className={classNames(classes)}>
                <img className={`${baseClassName}__image`} alt="" src={logo} height="250" />
            </div>
        )
    }
}

ImageOverlay.propTypes = {
    disbaled: PropTypes.bool
}