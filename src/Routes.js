import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
