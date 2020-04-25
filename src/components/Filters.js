import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes:
import TextInput from './FormComponents/TextInput';
import RadioImput from './FormComponents/RadioInput';
import CheckboxInput from './FormComponents/CheckboxInput';
import SelectInput from './FormComponents/SelectInput';

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.preventSubmit = this.preventSubmit.bind(this);
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { info:{ textFilter, speciesFilter, order, orderReverse, statusFilter} , task } = this.props;

        return (
            <form className="firltersBox" onSubmit={this.preventSubmit}>
                <div className="firltersBox__set">
                    <p className="legend text__base text__base--bold">filtrar por:</p>
                    <TextInput
                        name="textFilter" 
                        value={textFilter} 
                        task={task} 
                        labelText="nombre"
                        sampleText="Rick"
                    />
                    <SelectInput
                        name="speciesFilter" 
                        value={speciesFilter} 
                        task={task} 
                        labelText="especie"
                    />
                </div>
                <div className="firltersBox__set">
                    <p className="legend text__base text__base--bold">ver solo:</p>
                    <CheckboxInput
                        name="statusFilter"
                        value="Alive"
                        checked={statusFilter}
                        task={task} 
                        labelText="vivos" 
                    />
                </div>
                <div className="firltersBox__set">
                    <p className="legend text__base text__base--bold">ordenar por:</p>
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
                    <CheckboxInput
                        name="orderReverse"
                        value="reverse"
                        checked={orderReverse}
                        task={task} 
                        labelText="invertir" 
                    />
                </div>

            </form> 
        )
    }
}

Filters.propTypes = {
    info: PropTypes.object.isRequired,
    task: PropTypes.func.isRequired
}
