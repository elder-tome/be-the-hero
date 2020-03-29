import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes(){
  return(
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <Route path='/incidents/new' component={NewIncident} />
    </BrowserRouter>
  );
}

export default Routes;