import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'antd';
import { List} from 'antd';
import {Button} from 'antd'
import OrderLineItem from '../components/OrderLineItem.js'
import * as API_PATHS from '../api_path.js'

const API_PATH = API_PATHS.API_PATH



function to_array(input_obj){
  var output_array = [];
  var x;
  var y;
  for (x of Object.keys(input_obj)){
    output_array.push({"id":x,"quantity":input_obj[x]})
  };
  return(output_array)
}

class OrderConfirmPage extends Component {


  placeOrder = (orderID, order) =>{
axios.post()
  }


  render() {
    return (
      <div>
      <h1>Order Confirm Page</h1>

      <form>

      <Form.Item label="name">
          <textarea rows="1" cols="50" name="name" placeholder="name" />
      </Form.Item>

      <Form.Item label="email">
          <textarea rows="1" cols="50" name="email" placeholder="email@domain.com" />
      </Form.Item>


      <Form.Item label="phone">
          <textarea rows="1" cols="50" name="phone" placeholder="123-456-7890" />
      </Form.Item>

      <h1>show order items from local storage here</h1>

      <List

    dataSource={to_array(localStorage)}

    renderItem=
    {item => (
      <List.Item key={item.id}>
        <List.Item.Meta title= {<p>{item.id} - {item.quantity}</p>}/>
      </List.Item>
      )}
          />

      <Form.Item label="notes">
          <textarea rows="10" cols="70" name="notes" placeholder="special order instructions" />
      </Form.Item>

      <Button htmlType='submit'>Confirm Order</Button>

      </form>

      </div>
    )
  }
}

export default OrderConfirmPage
