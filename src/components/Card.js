import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Card extends Component {
    render() {

        const { id, image, name, species, gender, status } = this.props.info;
        const speciesIcon =
            species === "Human"
                ? <i className="fas fa-male card__infobox--icon"></i>
                : <i className="fas fa-pastafarianism card__infobox--icon"></i>;
        const genderIcon =
            gender === "Male"
                ? <i className="fas fa-mars card__infobox--icon"></i>
                : <i className="fas fa-venus card__infobox--icon"></i>;
        let statusIcon;
        switch (status) {
            case "Alive":
                statusIcon = <i className="fas fa-user-alt card__infobox--icon"></i>
                break;
            case "Dead":
                statusIcon = <i className="fas fa-user-alt-slash card__infobox--icon"></i>
                break;
            default:
                statusIcon = <i className="fas fa-question card__infobox--icon"></i>
        }

        return (
            <div className="card">
                <img src={image} alt={name} className="card__image" />
                <p className="card__text text__card text__card--title">
                    {name}
                </p>
                <div className="card__infobox">
                    <div className="card__infobox--info">
                        <p className="text__card text__card--bold">id</p>
                        <p className="card__infobox--id">{id}</p>
                    </div>
                    <div className="card__infobox--info">
                        <p className="text__card text__card--bold">especie</p>
                        {speciesIcon}
                        <p className="text__card">{species}</p>
                    </div>
                    <div className="card__infobox--info">
                        <p className="text__card text__card--bold">género</p>
                        {genderIcon}
                        <p className="text__card">{gender}</p>
                    </div>
                    <div className="card__infobox--info">
                        <p className="text__card text__card--bold">estado</p>
                        {statusIcon}
                        <p className="text__card">{status}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    info: PropTypes.object.isRequired
}
