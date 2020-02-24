import React, { Component } from 'react';
import './App.css';
import PersonContainer from './components/PersonContainer'
import { getPeopleFetch,
        getPeopleAxios,
        } from './utils'


class App extends Component {
  state = {
    people: [],
    error: true
  }

   async componentDidMount(){
     let data = await getPeopleAxios()
      this.setState({
        people: data,
        error: false
      })

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
