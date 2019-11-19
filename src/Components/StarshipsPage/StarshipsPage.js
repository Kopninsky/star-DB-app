import React, { Component } from 'react'

import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

export default class StarshipsPage extends Component {
  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllStarships}
            renderItem = {(item) => item.name} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}
