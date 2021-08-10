import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import SlideMenu from './pages/Main/SlideMenu/SlideMenu';
import Gbnow from './pages/Main/Gbnow/Gbnow';
import Allshop from './pages/Main/Allshop/Allshop';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Allshop" component={Allshop} />
          <Route exact path="/Gbnow" component={Gbnow} />
          <Route exact path="/SlideMenu" component={SlideMenu} />
          <Route exact path="/" component={Login} />
          <Route exact path="/Main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
