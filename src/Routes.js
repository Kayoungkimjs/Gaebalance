import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Join from './pages/Join/Join';
import Nav from './components/Nav/Nav/Nav';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/productLists" component={ProductLists} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
