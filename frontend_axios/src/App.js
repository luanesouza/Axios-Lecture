import React, { Component } from 'react';
import './App.css';
import PersonContainer from './components/PersonContainer'
import { getPeopleFetch,
        deletePeopleFetch,
        createPeopleFetch,
        updatePeopleFetch,
        } from './utils'
const axios = require('axios');
// const url = 'https://historical-figures.herokuapp.com/'
const url = 'http://localhost:3000'

class App extends Component {
  state = {
    people: [],
    error: true
  }

  componentDidMount(){
    // let data = getPeopleFetch()

    // let data = setInterval(() => {  console.log(getPeopleFetch())}, 3000);
    // console.log(data);

    axios(`${url}/people`)
      .then(response => {
        if(response.status === 200 || response){
          this.setState({
            people: response.data,
            error: false
          })
        } else {
          this.setState({
            error: true

          })
        }
      })
    // deletePeopleFetch(10)
  }
  render(){

    return (
      <div className="App">
        { this.state.error
        ?
        <>
        <p id='line'> Something went wrong </p>
        <img id='meme' src='https://i.kym-cdn.com/photos/images/original/000/768/910/412.png' alt='meme'/>
        </>
        :
        <PersonContainer people={this.state.people}/>
        }
      </div>
    );
  }
}

export default App;
