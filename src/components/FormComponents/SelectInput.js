import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.id, event.currentTarget.value);
    }

    render() {
        const { name, value, labelText } = this.props;
        return (
            <div className="inputBox">
                <label htmlFor={name} className="label text__base">
                    {labelText}
                </label>
                <select id={name} onChange={this.handleChange}>
                    <option value="All">todas</option>
                    <option value="Human">humana</option>
                    <option value="Alien">alien</option>
                </select>
            </div>
        )
    }
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
}
