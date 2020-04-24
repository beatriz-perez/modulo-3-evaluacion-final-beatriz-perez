import React from 'react';
import PropTypes from 'prop-types';

export default class Section extends React.Component {

    render() {
        return (
            <section className="container__page--section" id={this.props.id} role={this.props.role}>
                <div className="container__general">
                    <div className="container__section--section">

                        {this.props.children}
                        
                    </div>
                </div>
            </section>
        );
    }
}
Section.defaultProps = {
    id: 'centralSection',
    title: 'sección principal',
    role: 'main content'
}
Section.propTypes = {
    id: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}