import React from 'react';
import {Route} from 'react-router-dom';

import Home from './components/Home.js'
import RestaurantPage from './containers/RestaurantPage.js'


const BaseRouter =() => (
  <div>
    <Route exact path ='/' component ={Home} />
    <Route exact path='/restaurant/:restaurantID' component = {RestaurantPage} />


  </div>
)

export default BaseRouter
