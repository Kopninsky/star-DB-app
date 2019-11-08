import React, { Component } from 'react'

import './random-planet.css'

export default class RandomPLanet extends Component {
  state = {
    population: null,
    rotationPeriod: null,
    diametr: null
  }
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
             alt="alt" />
        <div>
          <h4>Planet Name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{this.state.population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{this.state.rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{this.state.diametr}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
