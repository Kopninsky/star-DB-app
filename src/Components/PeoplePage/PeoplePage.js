import React, { Component } from 'react'

import ItemList from '../ItemList'
import ItemDetails from '../ItemDetails'
import Row from '../Row'
import ErrorBoundry from '../ErrorBoundry'

import SwapiService from '../../services'

export default class PeoplePage extends Component {
  
  swapiService = new SwapiService()

  state = {
    selectedPerson : null
  }

  onItemSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {

    const itemList = (
      <ErrorBoundry>
        <ItemList 
          getData = {this.swapiService.getAllPeople}
          onItemSelected={this.onItemSelected}>
            { (i) => (`${i.name} ( ${i.birthYear} )`) }
        </ItemList>
      </ErrorBoundry>
    )

    const personDetails = (
      <ErrorBoundry>
        {/* <ItemDetails itemId={this.state.selectedPerson}/> */}
        <ItemDetails 
          itemId={this.state.selectedPerson}
          getData={this.swapiService.getPerson}
          getImageUrl={this.swapiService.getPersonImage}/>
      </ErrorBoundry>
    )
    
    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}