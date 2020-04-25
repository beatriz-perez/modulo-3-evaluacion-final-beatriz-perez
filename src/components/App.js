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
import InfoText from './InfoText';
import Filters from './Filters';
import CardList from './CardList';
import Detail from './Detail';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.showIntroText = this.showIntroText.bind(this);
    this.changeFilters = this.changeFilters.bind(this);
    this.changeOrder = this.changeFilters.bind(this);
    this.state = {
      introText: false,
      pageInfo: {},
      apiInfo: [],
      infoFilters: {
        textFilter: "",
        speciesFilter: "All",
        statusFilter: false,
        order: "id",
        orderReverse: false
      }
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

  showIntroText() {
    this.setState(prevState => ({
      introText: !prevState.introText
    }));
  }

  changeFilters(name, value) {
    const newInfoFilters = this.state.infoFilters;
    newInfoFilters[name] = value;
    this.setState({ infoFilters: newInfoFilters })
  };

  render() {
    return (
      <div className="App">
        <Header title="buscador de personajes" />

        <Section id="centralSection" role="main content">
          <Switch>

            <Route exact path="/">
              <InfoText info={this.state.introText} task={this.showIntroText}/>
              <Filters info={this.state.infoFilters} task={this.changeFilters}/>
              <CardList info={this.state}/>
            </Route>

            <Route 
              path="/detail/:id"
              render={routerProps => <Detail match={routerProps.match} info={this.state.apiInfo}/>} 
            />

          </Switch>
        </Section>

        <Footer />
      </div>
    );
  }
}