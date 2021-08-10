import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Join from './pages/Join/Join';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Join" component={Join} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
