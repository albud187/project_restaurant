import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Button } from 'antd';
import { List,Card } from 'antd';
import { Row, Col } from 'antd';

import * as API_PATHS from '../api_path.js'
const API_PATH = API_PATHS.API_PATH

class RestaurantPage extends Component {

  state = {
    restaurant: {},
    menus:[],
    menu_items:[],
  }

  fetchRestaurant = (restaurantID)=>{
    axios.get(`${API_PATH}api/Restaurants/${restaurantID}/`)
    .then(result=>{
      this.setState({
        restaurant:result.data
      })
      console.log("fetching restaurant data...")
      console.log(result.data)
    })
  }

  fetchMenus = (restaurantID) =>{
    axios.get(`${API_PATH}api/restaurant_menus?restaurantID=${restaurantID}`)
    .then(result=>{
      this.setState({
        menus:result.data
      })
      console.log("fetching restaurant menus...")
      console.log(result.data)
    })
  }

  fetchMenuItems = (restaurantID) =>{
    axios.get(`${API_PATH}api/restaurant_items?restaurantID=${restaurantID}`)
    .then(result=>{
      this.setState({
        menus_items:this.state.menus.concat(result.data)
      })
      console.log("fetching menu items")
      console.log(result.data)
    })
  }


componentDidMount(){
  const restaurantID = this.props.match.params.restaurantID;
  this.fetchRestaurant(restaurantID);
  this.fetchMenus(restaurantID);
  this.fetchMenuItems(restaurantID);
}


  render() {
    return (
      <div>

      <h1>Restaurant Page Here</h1>
      <p>id = {this.props.match.params.restaurantID}</p>

      <h1>state info </h1>
      <p>restaurant name = {this.state.restaurant.name}</p>
      <p>restaurant address = {this.state.restaurant.street_address}</p>

      <List
        dataSource={this.state.menus}
        renderItem={menu => (
          <List.Item key={menu.id}>
            <List.Item.Meta
              title={<p>
              {menu.title}
              </p>}/>

              <List
                dataSource={this.state.menu_items}
                renderItem={menu_item => (
                  <List.Item key={menu_item.id}>
                    <List.Item.Meta
                      title={<p>
                      {menu.title}
                      </p>}/>



                  </List.Item>
                )}
              />



          </List.Item>
        )}
      />

      </div>
    )
  }
}

export default RestaurantPage
