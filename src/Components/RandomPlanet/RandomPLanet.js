import React, { Component } from 'react'

import Swapiservice from '../../services'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator/'

import './random-planet.css'

export default class RandomPLanet extends Component {
  
  swapiservice = new Swapiservice()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    console.log('mount');
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 10000)
  }

  componentWillUnmount() {
    console.log('unmount');
    clearInterval(this.interval)
  }
  

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false})
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () =>{
    console.log('server request')
    const id = Math.floor(Math.random() * 25) + 1
    this.swapiservice
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    console.log('render');
    const {loading, planet, error} = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator/> : null
    const spinner = loading ? <Spinner/> : null
    const content = hasData ? <PlanetView planet = {planet}/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorMessage}
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