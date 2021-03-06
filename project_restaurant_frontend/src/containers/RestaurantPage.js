import React, { Component } from 'react'
import axios from 'axios'
import { List} from 'antd';
import {Button} from 'antd'
import Menu from '../components/Menu.js'
import * as API_PATHS from '../api_path.js'

const API_PATH = API_PATHS.API_PATH

function to_array(input_obj){
  var output_array = [];
  var x;
  for (x of Object.keys(input_obj)){
    output_array.push({"id":x,"quantity":input_obj[x]})
  };
  return(output_array)
}

// console.log(cost(2))
// console.log(typeof cost(2))


const id = 1
const url = (`${API_PATH}api/MenuItems/${id}/`)
const lst = []

const populateData = (data) =>{lst.push(data)}

function axiosTest (populateData,id) {
        axios.get(`${API_PATH}api/MenuItems/${id}/`)
       .then(function(response){
               populateData(response.data);
        })
        .catch(function(error){
               console.log(error);
         });
}
axiosTest(populateData, 1)
console.log(lst)

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

  whatispromise =(order_id)=>{
    console.log(axios.get(`${API_PATH}api/MenuItems/${order_id}/`))
    console.log(Object.keys(axios.get(`${API_PATH}api/MenuItems/${order_id}/`)))
    console.log('promise is')
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

  handleOrderSubmit = () =>{
    this.props.history.push('/order_placement')
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
        <Button onClick = {()=>this.handleOrderSubmit()} htmlType='submit'>Submit Order</Button>
      </form>

      <form>
        <Button onClick = {()=>this.handleClearOrder()}htmlType='submit'>Clear Order</Button>
      </form>

      </div>
    )
  }
}

export default RestaurantPage
