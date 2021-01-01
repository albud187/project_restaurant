import React, { Component } from 'react'
import {Button} from 'antd'


// create function to handle saving items to localstorage

class OrderItem extends Component {

  state = {
    quantity:0
  }

  handleAddItem = (event,data)=>{
    event.preventDefault()
    this.setState({
      quantity: this.state.quantity + 1
    })
    localStorage.setItem(data.id,this.state.quantity+1)
  }

  handleRemoveItem = (event,data)=>{
    event.preventDefault()
    this.setState({
      quantity: this.state.quantity - 1
    })
    localStorage.setItem(data.id,this.state.quantity-1)
  }

  render() {


    return (
      <>

      <p>

      OrderItem Test {this.props.data.id} - {this.props.data.name} -
      Price  - ${this.props.data.price}
      <Button onClick={(event,data)=>this.handleRemoveItem(event, this.props.data)} htmlType='button'>-</Button>
      <textarea rows="2" cols="3" name="orderitemcount" value = {this.state.quantity}/>

      <Button onClick={(event, data)=>this.handleAddItem(event, this.props.data)} htmlType='button'>+</Button>

      <textarea rows="2" cols="3" name="customquantity"/>
      <Button htmlType='button'>enter custom quantity</Button>



      </p>



      </>
    )
  }
}

export default OrderItem
