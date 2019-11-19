import React, { Component } from 'react'

import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import ErrorIndicator from '../ErrorIndicator'
import SwapiService from '../../services'

export default class PeoplePage extends Component {
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
            getData = {this.swapiService.getAllPeople}
            onItemSelected={this.onItemSelected}
            renderItem = {({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}
