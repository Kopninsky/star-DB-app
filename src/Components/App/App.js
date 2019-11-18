import React, { Component } from 'react'

import './app.css'

import Header from '../Header'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import RandomPlanet from '../RandomPlanet'

export default class App extends Component {
  
  state = {
    showRandomPlanet : false,
    selectedPerson: null
   }
  
  toggleRandomPlanet = () => {

    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
   }

  onItemSelected = (id) => {
     this.setState({
       selectedPerson: id
     })
   }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null

    return (
      <div className="container stardb-app">

        <Header />

        {planet}

        <div className="toggle_button">
          <button onClick={this.toggleRandomPlanet} className="btn btn-secondary">Toggle random planet</button>
          <button onClick={this.throwError} className="btn btn-danger">Throw ERROR</button>
        </div>

        <div className="row mb2">

          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
          </div>

          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>

        </div>

      </div>
    )
  }
}