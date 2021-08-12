import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import main from './pages/Main/Main';
import productDetail from './pages/ProductDetail/ProductDetail';
import shoppingCart from './pages/ShoppingCart/ShoppingCart';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={main} />
          <Route exact path="/productDetail/:id" component={productDetail} />
          <Route exact path="/shoppingCart" component={shoppingCart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
