import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import PeoplePage from '../PeoplePage'
import ErrorButton from '../ErrorButon'
// import PlanetsPage from '../PlanetsPage'
// import StarshipsPage from '../StarshipsPage' 
import Row from '../Row'
import ItemDetails, { Record } from '../ItemDetails'
import ErrorBoundry from '../ErrorBoundry'
import SwapiService from '../../services'

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
          itemId={15}
          getData={getPerson}
          getImageUrl={getPersonImage}>
          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye color"/>
        </ItemDetails>
      </ErrorBoundry>
    )

    const starshipDetails = (
      <ErrorBoundry>
        <ItemDetails 
          itemId={13}
          getData={getStarship}
          getImageUrl={getStarshipImage}>
          <Record field="model" label="Model"/>
          <Record field="length" label="Length"/>
          <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
      </ErrorBoundry>
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
            right={starshipDetails} />

          {/* <PlanetsPage/> */}
          {/* <StarshipsPage/> */}
          
        </ErrorBoundry>
      </div>
    )
  }
}