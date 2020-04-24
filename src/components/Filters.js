import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Componentes:
import TextInput from './FormComponents/TextInput';
import RadioImput from './FormComponents/RadioInput'

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.preventSubmit = this.preventSubmit.bind(this);
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { info:{ textFilter, order} , task } = this.props;

        return (
            <form className="firltersBox" onSubmit={this.preventSubmit}>
                <fieldset className="firltersBox__set">
                    <legend className="legend text__base">Filtrar por:</legend>
                    <TextInput 
                        name="textFilter" 
                        value={textFilter} 
                        task={task} 
                        labelText="nombre"
                        sampleText="Rick"
                    />
                </fieldset>
                <fieldset className="firltersBox__set">
                    <legend className="legend text__base">Ordenar por:</legend>
                    <RadioImput 
                        name="order" 
                        value="name"
                        checkValue={order} 
                        task={task} 
                        labelText="nombre"
                    />
                    <RadioImput 
                        name="order" 
                        value="id"
                        checkValue={order} 
                        task={task} 
                        labelText="id"
                    />
                </fieldset>
            </form> 
        )
    }
}

Filters.propTypes = {
    info: PropTypes.object.isRequired,
    task: PropTypes.func.isRequired
}
