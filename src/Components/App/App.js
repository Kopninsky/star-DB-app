import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PeoplePage from '../PeoplePage'
import ErrorButton from '../ErrorButon'
import PlanetsPage from '../PlanetsPage'
import StarshipsPage from '../StarshipsPage'

import Row from '../Row'
import ItemDetails from '../ItemDetails'
import SwapiService from '../../services'
import ErrorBoundry from '../ErrorBoundry'

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
    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={11}
          getData={getPerson}
          getImageUrl={getPersonImage}
        />
      </ErrorBoundry>
    )

    const starshipDetails = (
      <ItemDetails 
        itemId={15}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    )
    
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

          <PeoplePage/>

          <Row 
            left={personDetails} 
            rigth={starshipDetails} />

          {/* <PlanetsPage/> */}
          {/* <StarshipsPage/> */}
          
        </ErrorBoundry>
      </div>
    )
  }
}