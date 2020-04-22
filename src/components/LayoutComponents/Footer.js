import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="container__page--footer" id="footer" role="contentinfo">
                <div className="container__general">
                    <div className="container__section--footer">

                        <p className="footer__text text__footer">
                            code by
                            <a
                                className="footer__text--link text__footer text__footer--link"
                                href="https://beatriz-perez.github.io/Index/"
                                title="go to Beatriz's"
                                target="_blank"
                                rel="noopener noreferrer"
                            > Beatriz</a>
                        </p>

                    </div>
                </div>
            </footer>
        );
    }
}