import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Estilos:
import '../stylesheets/App.scss';

//Servicios:
import { fetchApiInfo } from '../services/APIservice';

// Componentes:
import Header from './LayoutComponents/Header';
import Section from './LayoutComponents/Section';
import Footer from './LayoutComponents/Footer';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiInfo: []
    }
  } 
  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('localinfo'));
    if(!savedState) {
      // fetchApiInfo() 
      // .then(data => {
      //   this.setState({
      //     apiInfo: data,
      //   });
      // });
    } else {
      this.setState(savedState);
    }
  }
  componentDidUpdate() {
    localStorage.setItem('localinfo', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">
        <Header title="Título de la aplicación" />
        <Section id="centralSection" title="Sección principal" role="main content">
        </Section>
        <Footer />
      </div>
    );
  }
}