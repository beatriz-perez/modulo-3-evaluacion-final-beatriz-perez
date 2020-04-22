import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
    render() {
        const { match:{params:{id}}, info } = this.props;
        let detailInfo = info.length === 0 ? null : info.find(item => item.id.toString() === id);
        console.log(detailInfo);

        return (

            
            <div>

                <Link to="/">VOLVER</Link>
                
            </div>
        )
    }
}

Detail.propTypes = {
    info: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
}
