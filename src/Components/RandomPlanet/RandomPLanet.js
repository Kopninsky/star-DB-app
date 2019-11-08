import React, { Component } from 'react'

import Swapiservice from '../../services'
import Spinner from '../Spinner'

import './random-planet.css'

export default class RandomPLanet extends Component {
  
  swapiservice = new Swapiservice()

  state = {
    planet: {},
    loading: true
  }

  constructor(){
    super()
    this.updatePlanet()
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  updatePlanet(){
    const id = Math.floor(Math.random() * 25) + 2
    this.swapiservice.getPlanet(id).then(this.onPlanetLoaded)
  }

  render() {

    const {loading, planet} = this.state

    const spinner = loading ? <Spinner/> : null
    const content = !loading ? <PlanetView planet = {planet}/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({planet}) => {
   const {id, name, population, rotationPeriod, diameter} = planet
  
   return(
      <React.Fragment>
        <img className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt={name} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
}