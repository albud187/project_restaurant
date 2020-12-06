import React from 'react';
import {Route} from 'react-router-dom';

import Home from './components/Home.js'
const BaseRouter =() => (
  <div>
    <Route exact path ='/' component ={Home} />

  </div>
)

export default BaseRouter
