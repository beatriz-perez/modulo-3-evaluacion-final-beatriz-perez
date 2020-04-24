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
                    <p className="detail__alertText text__base">
                        ¡RAYOS! No hay información... parece que el personaje que buscas no existe!
                    </p>
                    <DetailNavigation info={id}/>
                </div>
            )
        } else {
            const { 
                image, 
                name, 
                species, 
                gender, 
                origin:{ name:planet }, 
                episode, 
                status,

                created,
                location:{name:actLocation}
            } = detailInfo;

            return (
                <div className="detail__cardContainer">
                    <div className="detail__card">

                        <img src={image} alt={name} className="detail__card--image"/>

                        <div className="detail__card--texts">
                            <p className="detail__card--name text__title">
                                {name}
                            </p>
                            <p className="text text__base">
                                <span className="text__title">especie: </span>{species}
                            </p>
                            <p className=" text text__base">
                                <span className="text__title">género: </span>{gender}
                            </p>
                            <p className="text text__base">
                                <span className="text__title">planeta de origen: </span>{planet}
                            </p>
                            <p className="text text__base">
                                <span className="text__title">episodios en los que aparece: </span>{episode.length}
                            </p>
                            <p className="text text__base">
                                <span className="text__title">estado: </span>{status}
                            </p>
                            <p className="text text__base">
                                <span className="text__title">fue creado en: </span>{created}
                            </p>
                            <p className="text text__base">
                                <span className="text__title">localización actual: </span>{actLocation}
                            </p>

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
