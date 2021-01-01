import React, { Component } from 'react'
import axios from 'axios'
import { List} from 'antd';
import {Button} from 'antd'

import Menu from '../components/Menu.js'
import * as API_PATHS from '../api_path.js'

const API_PATH = API_PATHS.API_PATH


class RestaurantPage extends Component {

  state = {
    restaurant: {},
    menus:[],
    menu_items:[],
  }

  handleClearOrder = () => {
    localStorage.clear()
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

  handleSubmit = (event) =>{
    //axios.post new order
  }

componentDidMount(){

  const restaurantID = this.props.match.params.restaurantID;
  this.fetchRestaurant(restaurantID);
  this.fetchMenus(restaurantID);

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
              title={<h1>
              {menu.title}

              <Menu data={menu}/>
                </h1>}/>
          </List.Item>
        )}
      />

      <form>
        <Button htmlType='submit'>Confirm Order</Button>
      </form>

      <form>
        <Button onClick = {()=>this.handleClearOrder()}htmlType='submit'>Clear Order</Button>
      </form>

      </div>
    )
  }
}

export default RestaurantPage
