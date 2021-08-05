import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Join from './pages/Login/Join';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Nav" component={Nav} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
