import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import main from './pages/Main/Main';
import productDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={main} />
          <Route exact path="/productDetail" component={productDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
