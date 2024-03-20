// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* Add routes for other components */}
      </Switch>
    </Router>
  );
};

export default App;
