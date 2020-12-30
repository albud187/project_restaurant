import React, { Component } from 'react'
import {Button} from 'antd'


// create function to handle saving items to localstorage

class OrderItem extends Component {

  state = {
    quantity:0
  }

  handleAddItem = (event)=>{
    event.preventDefault()
    this.setState({
      quantity: this.state.quantity + 1
    })
  
  }

  handleRemoveItem = (event)=>{
    event.preventDefault()
    this.setState({
      quantity: this.state.quantity - 1
    })
  }
  render() {


    return (
      <>

      <p>

      OrderItem Test - {this.props.data.name} -
      Price  - ${this.props.data.price}
      <Button onClick={event=>this.handleRemoveItem(event)} htmlType='button'>-</Button>
      <textarea rows="2" cols="3" name="orderitemcount" value = {this.state.quantity}/>

      <Button onClick={event=>this.handleAddItem(event)} htmlType='button'>+</Button>

      <textarea rows="2" cols="3" name="customquantity"/>
      <Button htmlType='button'>enter custom quantity</Button>



      </p>



      </>
    )
  }
}

export default OrderItem
