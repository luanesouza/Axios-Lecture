import React, { Component } from 'react';
import './App.css';
import PersonContainer from './components/PersonContainer'
// import { getPeopleAxios, getPeopleFetch } from './utils'
const axios = require('axios');
const url = 'http://localhost:3000'

class App extends Component {
  state = {
    people: []
  }

  componentDidMount(){
    axios.get(`${url}/people`)
      .then(response => {
        this.setState({
          people: response.data
        })
      })
  }
  render(){
    console.log(this.state);

    return (
      <div className="App">
        <PersonContainer people={this.state.people}/>
      </div>
    );
  }
}

export default App;
