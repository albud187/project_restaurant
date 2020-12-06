import React from 'react';

import { List} from 'antd';
import { Card } from 'antd';

import * as API_PATHS from '../api_path.js'
const API_PATH = API_PATHS.API_PATH

const Restaurants =(props)=>{

  return(

  <List
    grid={{ gutter: 16, column: 4}}

    dataSource={props.data}

    renderItem={item => (
      <List.Item key={item.id}>
      <Card>
        <List.Item.Meta
          title={<a href={"/restaurant/"+`${item.id}`}>
          {item.id} - {item.name}
          </a>}/>

        <p><strong>contact</strong> : {item.public_email}, {item.public_phonenumber}</p>

        </Card>
      </List.Item>
    )}
  />
  )
}

export default Restaurants
