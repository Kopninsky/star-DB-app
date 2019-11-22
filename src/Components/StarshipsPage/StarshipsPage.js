import React, { Component } from 'react'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import ErrorIndicator from '../ErrorIndicator'
import SwapiService from '../../services'

export default class StarshipsPage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson : null,
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError : true})

  }

  onItemSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {

    if(this.state.hasError){
      return <ErrorIndicator/>
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapiService.getAllStarships}
            renderItem = {(item) => item.name} />
        </div>
        <div className="col-md-6">
          <ItemDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}
