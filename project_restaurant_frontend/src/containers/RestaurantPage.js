import React, { Component } from 'react'
import axios from 'axios'

import * as API_PATHS from '../api_path.js'
const API_PATH = API_PATHS.API_PATH

class RestaurantPage extends Component {
  state = {
    restaurant: {}
  }

componentDidMount(){
  const restaurantID = this.props.match.params.restaurantID;

}
  render() {
    return (
      <div>

      <h1>Restaurant Page Here</h1>
      <p>id = {this.props.match.params.restaurantID}</p>



      </div>
    )
  }
}

export default RestaurantPage
