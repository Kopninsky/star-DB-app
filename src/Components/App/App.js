import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PeoplePage from '../PeoplePage'
import ErrorButton from '../ErrorButon'
import ErrorIndicator from '../ErrorIndicator'
import PlanetsPage from '../PlanetsPage'
import StarshipsPage from '../StarshipsPage'

import SwapiService from '../../services'

import './app.css'

export default class App extends Component {

  swapiService = new SwapiService()
  
  state = {
    showRandomPlanet : false,
    hasError: false
   }
  
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
   }

  componentDidCatch() {
    this.setState({hasError : true})
   }

  render() {
    if(this.state.hasError){
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null

    return (
      <div className="container stardb-app">
        <Header />
        {planet}
        <div className="toggle_button">
          <button onClick={this.toggleRandomPlanet} className="btn btn-secondary">
            Toggle random planet
          </button>
          <ErrorButton/>
        </div>
        <PeoplePage/>
        {/* <PlanetPage/> */}
        {/* <StarshipsPage/> */}
      </div>
    )
  }
}