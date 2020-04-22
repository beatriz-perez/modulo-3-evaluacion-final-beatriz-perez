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
import Filters from './Filters';
import CardList from './CardList';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeFilters = this.changeFilters.bind(this);
    this.state = {
      pageInfo: {},
      apiInfo: [],
      textFilter: ""
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
  };

  changeFilters(name, value) {
    this.setState({ [name]: value })
  };

  render() {
    return (
      <div className="App">
        <Header title="Título de la aplicación" />
        <Section id="centralSection" title="Sección principal" role="main content">
          
          <Filters info={this.state} task={this.changeFilters}/>
          <CardList info={this.state}/>

        </Section>
        <Footer />
      </div>
    );
  }
}