import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
// import Login from './pages/Login/Login';

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
          <Route exact path="/allshop" component={Allshop} />
          <Route exact path="/gbnow" component={Gbnow} />
          <Route exact path="/slideMenu" component={SlideMenu} />

          <Route exact path="/nav" component={Nav} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/" component={main} />
          <Route exact path="/productLists" component={ProductLists} />

          <Route exact path="/productDetail" component={productDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
