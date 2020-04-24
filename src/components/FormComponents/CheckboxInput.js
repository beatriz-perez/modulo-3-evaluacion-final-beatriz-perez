import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class CheckboxInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.name, event.currentTarget.checked);
    }


    render() {
        const { name, checked, labelText, value } = this.props;
        return (
            <div className="inputBox">
                <input
                        type="checkbox"
                        id={name} 
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={this.handleChange}
                />
                <label htmlFor={name} className="label text__base">
                    
                    {labelText}
                </label>
            </div>
        )
    }
}

CheckboxInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired
}