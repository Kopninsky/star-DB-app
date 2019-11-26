import React, { Component } from 'react'

import SwapiService from '../../services'
import ErrorButton from '../ErrorButon'

import './item-details.css'

export default class ItemDetails extends Component {
  swapiService = new SwapiService ()
  
  state = {
    item: null,
    image: null
  }

  componentDidMount(){
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props

    if (!itemId) {
      return 
    }

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item,
          image: getImageUrl(item)
         })
      })
      .then(()=>{
        console.log(this.state.item)
        console.log('last then')
      }
        )
  }

  render() {
    const { item, image } = this.state
    
    if (!item) {
      return <span>Select item from a list</span>
    }

    const { name, gender, birthYear, eyeColor } = item

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="alt"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
            <li className="list-group-item">
                <ErrorButton/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
