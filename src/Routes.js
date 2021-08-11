import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
import Login from './pages/Login/Login';

import SlideMenu from './pages/Main/SlideMenu/SlideMenu';
import Gbnow from './pages/Main/Gbnow/Gbnow';
import Allshop from './pages/Main/Allshop/Allshop';
import Nav from './components/Nav/Nav/Nav';
import main from './pages/Main/Main';
import productDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Allshop" component={Allshop} />
          <Route exact path="/Gbnow" component={Gbnow} />
          <Route exact path="/SlideMenu" component={SlideMenu} />

          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={main} />
          <Route exact path="/ProductLists" component={ProductLists} />

          <Route exact path="/productDetail" component={productDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
