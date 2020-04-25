import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class InfoText extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.task();
    }
    
    render() {
        return (
            <React.Fragment>
            <p className="info__title text__title" onClick={this.handleClick}>
                <i className={`fas fa-sort-down ${this.props.info === true ? "up" : "down"}`}></i> info
            </p>
            <div className={this.props.info === true ? "info_box" : "hidden"}>
            
                <p className="info_paragraph text__info">
                    Proyecto desarrollado como examen final del tercer módulo de Adalab.
                </p>
                <p className="info_paragraph text__info">
                    El ejercicio consiste en una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje empleando React para realizarlo.
                </p>
                <p className="info_paragraph text__info">
                    Además, podemos filtrar los personajes por especie, elegir ver sólo los personajes vivos, seleccionar el criterio por el que se ordenan, o invertir su orden.
                </p>
                <p className="info_paragraph text__info">
                    Al hacer click en la tarjeta de un personaje accederemos a su información en detalle, y podremos navegar entre personajes por orden de ID.
                </p>
            </div>
            </React.Fragment>
        )
    }
}
InfoText.propTypes = {
    info: PropTypes.bool.isRequired,
    task: PropTypes.func.isRequired
}