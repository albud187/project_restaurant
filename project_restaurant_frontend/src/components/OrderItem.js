import React, { Component } from 'react'
import {Button} from 'antd'


// create function to handle saving items to localstorage

class OrderItem extends Component {
  render() {
    return (
      <>

      <p>

      OrderItem Test - {this.props.data.name} -

      <Button htmlType='submit'>+</Button>
      <textarea rows="2" cols="3" name="orderitemcount"/>

      <Button htmlType='submit'>-</Button>



      </p>



      </>
    )
  }
}

export default OrderItem
