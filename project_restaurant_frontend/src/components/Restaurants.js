import React from 'react';

import { List} from 'antd';
import { Card } from 'antd';
import { Table, Tag, Space } from 'antd';

import * as API_PATHS from '../api_path.js'
const API_PATH = API_PATHS.API_PATH
const { Column, ColumnGroup } = Table;


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },

  {
    title: 'Province',
    dataIndex: 'state_province',
    key: 'province',
  },

  {
    title: 'Hours',
    dataIndex: 'hours',
    key: 'hours',
  },

  {
    title: 'Menu',
    dataIndex: 'menu',
    key: 'menu',
  },
]

const Restaurants =(props)=>{

  return(
<div>
  <List

    dataSource={props.data}

    renderItem={item => (
      <List.Item key={item.id}>

        <List.Item.Meta
          title={<a href={`/restaurant/${item.id}`}>
          {item.id} - {item.name}
          </a>}/>

        <p><strong>contact</strong> : {item.public_email}, {item.public_phonenumber}</p>


      </List.Item>
    )}
  />

<Table dataSource={props.data}

columns ={
  [
    {
      title: 'Name',
      dataIndex: 'id',
      key: 'id',
      render: item => (
        <a href={`/restaurant/${item}`}>
        {item}
        </a>
      )
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },

    {
      title: 'Province',
      dataIndex: 'state_province',
      key: 'province',
    },

    {
      title: 'Hours',
      dataIndex: 'hours',
      key: 'hours',
    },

    {
      title: 'Menu',
      dataIndex: 'menu',
      key: 'menu',
    },
  ]
}>

</Table>
</div>
  )
}

export default Restaurants
