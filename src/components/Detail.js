import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes:
import DetailNavigation from './DetailNavigation';

export default class Detail extends Component {
    render() {
        const { match:{params:{id}}, info } = this.props;
        let detailInfo = info.length === 0 ? null : info.find(item => item.id.toString() === id);

        if(!detailInfo) {
            return (
                <div className="detail__cardContainer">
                    <p>RAYOS! No hay información... parece que el personaje que buscas no existe!</p>
                    <DetailNavigation info={id}/>
                </div>
            )
        } else {
            const { image, name, species, gender, origin:{ name:planet }, episode, status } = detailInfo;
            return (
                <div className="detail__cardContainer">
                    <div className="detail__card">
                        <img src={image} alt={name} className="detail__card--image"/>
                        <div className="detail__card--texts">
                            <p className="text__base">nombre: {name}</p>
                            <p className="text__base">especie: {species}</p>
                            <p className="text__base">género: {gender}</p>
                            <p className="text__base">planeta de origen: {planet}</p>
                            <p className="text__base">episodios en los que aparece: {episode.length}</p>
                            <p className="text__base">estado: {status}</p>
                        </div>
                    </div>
                    <DetailNavigation info={id}/>
                </div>
            )
        }
    }
}

Detail.propTypes = {
    info: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
}
