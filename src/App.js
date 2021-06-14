import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
