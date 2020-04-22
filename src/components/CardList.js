import React, { Component } from 'react'
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
        }

        const { apiInfo } = this.props.info;
        const resultsArray = apiInfo.map(generateJSX)

        return (
            <ul>
                {resultsArray}
            </ul>
        )
    }
}

CardList.propTypes = {
    info: PropTypes.object.isRequired
}