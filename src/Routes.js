import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Join from './pages/Join/Join';
import Nav from './components/Nav/Nav/Nav';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/join" component={Join} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/productLists" component={ProductLists} />

          <Route exact path="/productDetail" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
