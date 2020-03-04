import React from 'react'

import ItemDetails, { Record } from '../ItemDetails'
import SwapiService from '../../services/SwapiService'
import ErrorBoundry from '../ErrorBoundry'

const swapiService = new SwapiService()

const { 
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService

const PersonDetails = ({itemId}) => {
  return (
    <ErrorBoundry>
        <ItemDetails 
          itemId={itemId}
          getData={getPerson}
          getImageUrl={getPersonImage}>
          <Record field="gender" label="Gender"/>
          <Record field="eyeColor" label="Eye color"/>
        </ItemDetails>
      </ErrorBoundry>
  )
}
const PlanetDetails = ({itemId}) => {
  return (
    <ErrorBoundry>
        <ItemDetails 
          itemId={itemId}
          getData={getPlanet}
          getImageUrl={getPlanetImage}>
          <Record field="population" label="Population"/>
          <Record field="rotationPeriod" label="Rotation period"/>
          <Record field="diameter" label="Diameter"/>
        </ItemDetails>
      </ErrorBoundry>
  )
}
const StarshipDetails = ({itemId}) => {
  return (
    <ErrorBoundry>
        <ItemDetails 
          itemId={itemId}
          getData={getStarship}
          getImageUrl={getStarshipImage}>
          <Record field="model" label="Model"/>
          <Record field="length" label="Length"/>
          <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
      </ErrorBoundry>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}