import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

import shoppingCart from './pages/ShoppingCart/ShoppingCart';

import Join from './pages/Join/Join';
import Nav from './components/Nav/Nav/Nav';

import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route exact path="/shoppingCart" component={shoppingCart} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/productLists" component={ProductLists} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
