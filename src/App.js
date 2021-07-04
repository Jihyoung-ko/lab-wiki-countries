import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList.jsx'
import { Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      countries:[]
    }
  }

  componentDidMount() {
    this.setState({
      countries: countries
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="flex main-container">
          <CountriesList  countries={countries}/>
          <Route exact path="/country/:id" render={(props) => <CountryDetails {...props} countries={countries} />} />
        </div>
        
      </div>
    );
  }
 
}

export default App;
