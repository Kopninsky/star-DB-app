import React, { Component } from 'react'

import SwapiService from '../../services'

import Header from '../Header'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import RandomPlanet from '../RandomPlanet'


export default class App extends Component {

  render() {
    const swapi = new SwapiService()

    swapi.getAllPeople().then((people)=>{
      people.forEach((p)=>{
        console.log(p.name)
      })
    })

    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    )
  }
}
