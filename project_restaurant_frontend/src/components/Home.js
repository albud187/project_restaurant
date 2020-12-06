import React, { Component } from 'react'

import axios from 'axios'
import Restaurants from './Restaurants.js'
import * as API_PATHS from '../api_path.js'
const API_PATH = API_PATHS.API_PATH

class Home extends Component {

  state = {
    restaurants:[],
  }

  fetchRestaurants = () => {
    axios.get(`${API_PATH}api/Restaurants/`)
    .then(res=>{
      this.setState({
        restaurants:res.data
      });
      console.log(res.data)
    })

  }

  componentDidMount(){
    this.fetchRestaurants();
  }

  render() {
    return (
      <div>Home Page

      <p> RESTAURANT LIST</p>

      <Restaurants data = {this.state.restaurants}/>

      </div>
    )
  }
}

export default Home
