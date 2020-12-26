import React, { Component } from 'react'
import {Button} from 'antd'


// create function to handle saving items to localstorage

class OrderItem extends Component {
  render() {
    return (
      <>

      <p>

      OrderItem Test - {this.props.data.name} -
      Price  - ${this.props.data.price}
      <Button htmlType='button'>+</Button>
      <textarea rows="2" cols="3" name="orderitemcount"/>
      <Button htmlType='button'>-</Button>



      </p>



      </>
    )
  }
}

export default OrderItem
