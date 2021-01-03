import React, { Component } from 'react'
import axios from 'axios'
import { List} from 'antd';
import { Table, Tag, Space } from 'antd';

function to_array(input_obj){
  var output_array = [];
  var x;
  for (x of Object.keys(input_obj)){
    output_array.push({"id":x,"quantity":input_obj[x]})
  };
  return(output_array)
}


class OrderLineItem extends Component {
  render() {
    return (
      <div>

      test

      </div>
    )
  }
}

export default OrderLineItem
