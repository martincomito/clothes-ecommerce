import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { auth } from './firebase/firebase.utils';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
