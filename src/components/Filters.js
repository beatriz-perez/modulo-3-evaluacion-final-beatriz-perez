import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Componentes:
import TextInput from './FormComponents/TextInput';
import RadioImput from './FormComponents/RadioInput'

export default class Filters extends Component {
    render() {

        const { info:{ textFilter, order} , task } = this.props;

        return (
            <form>
                <TextInput 
                    name="textFilter" 
                    value={textFilter} 
                    task={task} 
                    labelText="filtrar por nombre"
                    sampleText="Rick"
                />

                <RadioImput name="order" 
                    value="name"
                    checkValue={order} 
                    task={task} 
                    labelText="ordenar por nombre"
                />
                <RadioImput name="order" 
                    value="id"
                    checkValue={order} 
                    task={task} 
                    labelText="ordenar por id"
                />

            </form> 
        )
    }
}

Filters.propTypes = {
    info: PropTypes.object.isRequired,
    task: PropTypes.func.isRequired
}
