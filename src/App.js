import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Dashboard} />
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/forgotpassword' component={ForgotPassword}/>
      </Switch>
    </Router>
  );
}

export default App;
