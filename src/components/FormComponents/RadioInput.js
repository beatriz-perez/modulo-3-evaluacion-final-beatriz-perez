import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class RadioInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.name, event.currentTarget.value);
    }


    render() {
        const { name, value, labelText, checkValue } = this.props;
        return (
            <React.Fragment>
                <input
                    type="radio" 
                    name={name}
                    value={value} 
                    id={value}
                    checked={checkValue === value ? true : false}
                    onChange={this.handleChange}
                />  
                <label htmlFor={value} className="text__base">{labelText}</label>

            </React.Fragment>            
        )
    }
}

RadioInput.propTypes ={
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checkValue: PropTypes.string.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired
}