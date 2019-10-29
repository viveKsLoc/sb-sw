import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class LanguageSelect extends Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showAll: false
        }
    }

    callCountries = () => {
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => this.setState({ data, showAll: true }))
        .catch((e) => console.log(e));
    }

    handleOnChange = (e) => {
        if(e.target.value === 'All') {
            this.callCountries();
        }
    }

    render() {
        let baseClassName = "pb-language-select";

        let {
            parentClassName
        } = this.props;

        let classes = {
            [baseClassName]: true,
            [parentClassName]: parentClassName
        }

        let options = [
            { value: "English", name: "English" },
            { value: "Hindi", name: "Hindi" },
            { value: "Marati", name: "Marati" },
            { value: "All", name: "See All Languages" }
        ]

        return (
            <div className={classNames(classes)}>
                <label className={`${baseClassName}__label`}>Language</label><div/>
                <select className={`${baseClassName}__select`} onChange={this.handleOnChange}>
                {
                    this.state.showAll
                    ?
                        this.state.data.map((obj) => obj.languages.map((lang, i) => <option
                                className={`${baseClassName}__all-options`}
                                key={i}
                                value={lang.name}
                            >
                                {lang.nativeName}
                            </option>
                        ))
                    :
                        options.map((obj, i) => <option
                                className={`${baseClassName}__default-options`}
                                key={i}
                                value={obj.value}
                            >
                                {obj.name}
                            </option>
                        )
                }
                </select>
            </div>
        )
    }
}

LanguageSelect.propTypes = {
    label: PropTypes.bool
}
