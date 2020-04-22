import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Componentes:
import Card from './Card';

export default class CardList extends Component {
    render() {

        const generateJSX = (item, index) => {
            return(
                <li key={index}>
                    <Link to={`/detail/${item.id}`} className="card">
                        <Card info={item}/>
                    </Link>
                </li>
            )
        };

        const { apiInfo, textFilter, order } = this.props.info;
        const resultsArray = apiInfo
            .filter(item => textFilter === "" || item.name.toLowerCase().includes(textFilter.toLowerCase()))
            .sort((a, b) => {
                if (a[order] > b[order]) {return 1;}
                if (a[order] < b[order]) {return -1;}
                else {return 0;}
            })
            .map(generateJSX);

        let resultInfoText;
        switch (resultsArray.length) {
            case 0:
                resultInfoText = "RAYOS! Parece que no hay ningún personaje que coincida con tu búsqueda."
                break;
            case 1:
                resultInfoText = "Hay un único resultado para tu búsqueda:"
                break;
            default:
                resultInfoText = `Hay ${resultsArray.length} resultados para tu búsqueda:`
        }

        return (
            <React.Fragment>
                <p className="text__base">{resultInfoText}</p>
                <ul>
                    {resultsArray}
                </ul>
            </React.Fragment>
        )
    }
}

CardList.propTypes = {
    info: PropTypes.object.isRequired
}