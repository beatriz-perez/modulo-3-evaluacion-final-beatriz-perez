import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Card extends Component {
    render() {

        const { id, image, name, species, gender, status} = this.props.info;

        return (
            <div className="card">
                <img src={image} alt={name} className="card__image"/>
                <p className="card__text">
                    {name}
                </p>
                <div className="card__infobox">
                    <div className="card__infobox--info">
                        <p>especie</p>
                        <p>{species}</p>
                    </div>
                    <div className="card__infobox--info">
                        <p>género</p>
                        <p>{gender}</p>
                    </div>
                    <div className="card__infobox--info">
                        <p>estado</p>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    info: PropTypes.object.isRequired
}
