import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.name, event.currentTarget.value);
    }

    render() {
        const { name, value, labelText, sampleText } = this.props;
        return (
            <React.Fragment>
                <label htmlFor={name} className="label text__base">
                    {labelText}
                    <input
                        type="text"  
                        id={name} 
                        name={name} 
                        value={value} 
                        placeholder={sampleText}
                        onChange={this.handleChange}
                    />  
                </label>
            </React.Fragment>
        )
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    sampleText: PropTypes.string
}
