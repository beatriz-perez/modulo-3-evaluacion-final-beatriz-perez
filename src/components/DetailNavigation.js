import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class DetailNavigation extends Component {
    render() {
        const {info} = this.props;
        const id = parseInt(info);
        const nextDetail = id + 1;
        const prevDetail = id - 1;
        console.log(parseInt(id), nextDetail, prevDetail);
        
        if (id === 1) {
            return (
                <div>
                    <Link to="/">ver listado</Link>
                    <Link to={`/detail/${nextDetail}`}>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            )
        } else if (id > 1 && id < 20) {
            return (
                <div>
                    <Link to={`/detail/${prevDetail}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    <Link to="/">ver listado</Link>
                    <Link to={`/detail/${nextDetail}`}>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            )
        } else if (id === 20) {
            return (
                <div>
                    <Link to={`/detail/${prevDetail}`}>
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    <Link to="/">ver listado</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/">ver listado</Link>
                </div>
            )
        }

    }
}
DetailNavigation.propTypes = {
    info: PropTypes.string.isRequired
}
