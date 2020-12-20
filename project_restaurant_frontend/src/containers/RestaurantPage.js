import React, { Component } from 'react'
import axios from 'axios'

import * as API_PATHS from '../api_path.js'
const API_PATH = API_PATHS.API_PATH

class RestaurantPage extends Component {

  state = {
    restaurant: {},
    menus:[],
    menu_items:[],
  }


componentDidMount(){
  const restaurantID = this.props.match.params.restaurantID;

  axios.get(`${API_PATH}api/Restaurants/${restaurantID}/`)
  .then(result=>{
    this.setState({
      restaurant:result.data
    })
    console.log(result.data)
  })

  



}


  render() {
    return (
      <div>

      <h1>Restaurant Page Here</h1>
      <p>id = {this.props.match.params.restaurantID}</p>

      <h1>state info </h1>
      <p>restaurant name = {this.state.restaurant.name}</p>
      <p>restaurant address = {this.state.restaurant.street_address}</p>




      </div>
    )
  }
}

export default RestaurantPage
