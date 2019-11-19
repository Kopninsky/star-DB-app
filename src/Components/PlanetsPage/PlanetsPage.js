import React, { Component } from 'react'

import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

export default class PlanetsPage extends Component {
  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem = {(item) => (<span> {item.name} </span>)} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}
