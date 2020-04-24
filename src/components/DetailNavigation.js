import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class DetailNavigation extends Component {
    render() {
        
        const {info} = this.props;
        const id = parseInt(info);
        const nextDetail = id + 1;
        const prevDetail = id - 1;
        
        if (id === 1) {
            return (
                <div className="navBox">
                    <div className="button__base button__base--off text__base"><i className="fas fa-times"></i></div>
                    <Link className="button__base text__base" to="/">ver listado</Link>
                    <Link className="button__base text__base" to={`/detail/${nextDetail}`}>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            )
        } else if (typeof(id) === 'number' && id > 1 && id < 20) {
            return (
                <div className="navBox">
                    <Link className="button__base text__base" to={`/detail/${prevDetail}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    <Link className="button__base text__base" to="/">ver listado</Link>
                    <Link className="button__base text__base" to={`/detail/${nextDetail}`}>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            )
        } else if (id === 20) {
            return (
                <div className="navBox">
                    <Link className="button__base text__base" to={`/detail/${prevDetail}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    <Link className="button__base text__base" to="/">ver listado</Link>
                    <div className="button__base button__base--off text__base"><i className="fas fa-times"></i></div>
                </div>
            )
        } else {
            return (
                <div className="navBox">
                    <Link className="button__base text__base" to="/">ver listado</Link>
                </div>
            )
        }

    }
}
DetailNavigation.propTypes = {
    info: PropTypes.string.isRequired
}
