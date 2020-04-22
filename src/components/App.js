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
import CardList from './CardList';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageInfo: {},
      apiInfo: []
    }
  } 
  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem('localinfo'));
    if(!savedState) {
      fetchApiInfo() 
      .then(data => {
        this.setState({
          apiInfo: data.results,
          pageInfo: data.info
        });
      });
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

          <CardList info={this.state}/>

        </Section>
        <Footer />
      </div>
    );
  }
}