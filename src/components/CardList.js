import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Componentes:
import Card from './Card';

export default class CardList extends Component {
    render() {

        const generateJSX = (item, index) => {
            return (
                <li key={index} className="listElement">
                    <Link to={`/detail/${item.id}`}>
                        <Card info={item} />
                    </Link>
                </li>
            )
        };
        
        const { apiInfo, infoFilters:{ textFilter, speciesFilter, order, orderReverse, statusFilter } } = this.props.info;
        const filteredArray = apiInfo
            .filter(item => textFilter === "" || item.name.toLowerCase().includes(textFilter.toLowerCase()))
            .filter(item => speciesFilter === "All" || item.species === speciesFilter)
            .filter(item => statusFilter === false || item.status === "Alive")
            .sort((a, b) => {
                if (a[order] > b[order]) { return 1; }
                if (a[order] < b[order]) { return -1; }
                else { return 0; }
            })
            .map(generateJSX);
        const resultsArray = orderReverse === false ? filteredArray : filteredArray.reverse();

        let resultInfoText;
        switch (resultsArray.length) {
            case 0:
                resultInfoText = 
                `¡RAYOS! Parece que no hay ningún personaje que coincida con tu búsqueda "${textFilter}".`
                break;
            case 1:
                resultInfoText = "Hay un único resultado para tu búsqueda:"
                break;
            default:
                resultInfoText = `Hay ${resultsArray.length} resultados para tu búsqueda:`
        }

        return (
            <React.Fragment>
                <p className="resultsInfo text__base">{resultInfoText}</p>
                <ul className="cardList">
                    {resultsArray}
                </ul>
            </React.Fragment>
        )
    }
}

CardList.propTypes = {
    info: PropTypes.object.isRequired
}