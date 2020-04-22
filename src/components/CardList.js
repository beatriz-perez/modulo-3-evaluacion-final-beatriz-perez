import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Componentes:
import Card from './Card';

export default class CardList extends Component {
    render() {

        const generateJSX = (item, index) => {
            return(
                <li key={index}>
                    <Card info={item}/>
                </li>
            )
        };

        const { apiInfo, textFilter } = this.props.info;
        const resultsArray = apiInfo
            .filter(item => textFilter === "" || item.name.toLowerCase().includes(textFilter.toLowerCase()))
            .map(generateJSX);

        return (
            <React.Fragment>
                <p className="text__base">Mostrando {resultsArray.length} resultados</p>
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