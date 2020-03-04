import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorButton from '../ErrorButon'
import ErrorBoundry from '../ErrorBoundry'
import SwapiService from '../../services'
import { 
  PersonList,
  PlanetList,
  StarshipList } from '../SW-components/ItemLists'
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
  } from '../SW-components/Details'

import './app.css'

export default class App extends Component {

  swapiService = new SwapiService()
  
  state = {
    showRandomPlanet : false
   }
  
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
   }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null

    return (
      <div className="container stardb-app">
        <ErrorBoundry>
          <Header />

          {planet}

          <div className="toggle_button">
            <button onClick={this.toggleRandomPlanet} className="btn btn-secondary">
              Toggle random planet
            </button>
            <ErrorButton/>
          </div>

          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={11}/>
          <StarshipDetails itemId={11}/>
          <PersonList/>
          <PlanetList/>
          <StarshipList/>

        </ErrorBoundry>
      </div>
    )
  }
}