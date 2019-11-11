import React, { Component } from 'react'

import Header from '../Header'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import RandomPlanet from '../RandomPlanet'

export default class App extends Component {
  state = {
    selectedPerson: null
   }
  
  onItemSelected = (id) => {
     this.setState({
       selectedPerson: id
     })
   }

  render() {
    return (
      <div className="container stardb-app">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPerson={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    )
  }
}
