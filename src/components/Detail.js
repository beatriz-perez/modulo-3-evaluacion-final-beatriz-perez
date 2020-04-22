import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
    render() {
        const { match:{params:{id}}, info } = this.props;
        let detailInfo = info.length === 0 ? null : info.find(item => item.id.toString() === id);
        console.log('detailInfo', detailInfo);

        if(!detailInfo) {
            return (
                <div>
                    <p>RAYOS! No hay información... parece que el personaje que buscas no existe!</p>
                    <Link to="/">VOLVER</Link>
                </div>
            )
        } else {
            const { image, name, species, gender, origin:{ name:planet }, episode, status } = detailInfo;
            return (
                <div>
                    <img src={image} alt={name}/>
                    <p>nombre: {name}</p>
                    <p>especie: {species}</p>
                    <p>género: {gender}</p>
                    <p>planeta de origen: {planet}</p>
                    <p>episodios en los que aparece: {episode.length}</p>
                    <p>estado: {status}</p>

                    <Link to="/">VOLVER</Link>
                </div>
            )
        }
    }
}

Detail.propTypes = {
    info: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
}
