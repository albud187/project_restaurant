import React, { Component } from 'react'
import MenuItem from './MenuItem.js'

class Menu extends Component {
  state ={
    menus:this.props.data
  }
  render() {
    return (
      <div>

      <MenuItem data = {this.props.data.id}/>

      </div>
    )
  }
}

export default Menu
