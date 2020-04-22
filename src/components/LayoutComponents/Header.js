import React from 'react';
import PropTypes from 'prop-types';

// Imágenes:
import Rick_and_Morty_logo from '../../images/Rick_and_Morty_logo.png';

export default class Header extends React.Component {

    render() {
        return (
            <header className="container__page--header" id="header" role="navigation">
                <div className="container__general">
                    <div className="container__section--header">

                        <img src={Rick_and_Morty_logo} alt="Rick and Morty Logo"/>
                        <h1 className="text__SITE--title">
                            {this.props.title}
                        </h1>

                    </div>
                </div>
            </header>
        );
    }
}
Header.defaultProps = {
    title: 'aplicación react'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}