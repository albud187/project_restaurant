import React from 'react';
import {Route} from 'react-router-dom';

import Home from './components/Home.js'
import RestaurantPage from './containers/RestaurantPage.js'
import OrderConfirmPage from './forms/OrderConfirm.js'

const BaseRouter =() => (
  <div>
    <Route exact path ='/' component ={Home} />
    <Route exact path='/restaurant/:restaurantID' component = {RestaurantPage} />
    <Route exact path='/order_placement' component = {OrderConfirmPage} />




  </div>
)

export default BaseRouter
