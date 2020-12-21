import React, { Component } from 'react'
import axios from 'axios'

import { List} from 'antd';

import * as API_PATHS from '../api_path.js'

const API_PATH = API_PATHS.API_PATH


class MenuItem extends Component {
  state = {
    menu_items:[]
  }

  fetchMenuItems = (menuID) =>{
    axios.get(`${API_PATH}api/menu_items?menuID=${menuID}`)
    .then(result=>{
      this.setState({
        menu_items:result.data
      })
      console.log("fetching menu items")
      console.log(result.data)
    })
  }

  componentDidMount(){
    const menuID =this.props.data;
    this.fetchMenuItems(menuID)

}

  render() {
    return (
      <div>

      <p>MENU_ITEM - {this.props.data}</p>

      <List
        dataSource={this.state.menu_items}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={<p>
              {item.name}
              </p>}/>

          </List.Item>
        )}
      />


      </div>



    )
  }
}

export default MenuItem
