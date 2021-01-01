import React, { Component } from 'react'
import {Button} from 'antd'
import { Form } from 'antd';


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

  handleSetOrderQuantity = (event,data) =>{
    event.preventDefault()
    const custom_quantity = event.target.elements.custom_quantity.value;
    this.setState({
      quantity: custom_quantity
    })
      localStorage.setItem(data.id,custom_quantity)
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

      <form onSubmit = {(event, data)=>this.handleSetOrderQuantity(event, this.props.data)}>
        <Form.Item label="input">
          <input type="number" rows="2" cols="3" name="custom_quantity"/>
        </Form.Item>

        <Form.Item>
          <button type="submit">enter custom quantity</button>
        </Form.Item>
      </form>



      </p>



      </>
    )
  }
}

export default OrderItem
