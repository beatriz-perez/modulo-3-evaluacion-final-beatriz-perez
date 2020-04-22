import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Componentes:
import TextInput from './FormComponents/TextInput';

export default class Filters extends Component {
    render() {

        const { info:{ textFilter} , task } = this.props;

        return (
            <form>
                <TextInput 
                    name="textFilter" 
                    value={textFilter} 
                    task={task} 
                    labelText="filtrar por nombre"
                    sampleText="Rick"
                />
            </form>
        )
    }
}

Filters.propTypes = {
    info: PropTypes.object.isRequired,
    task: PropTypes.func.isRequired
}
