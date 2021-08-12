import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
import productDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/productLists" component={ProductLists} />
          <Route exact path="/productDetail/:id" component={productDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
