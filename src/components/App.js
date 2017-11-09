/**
* Common entry point for the app
* @flow
*/

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from '../store';

import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';

const Nav = StackNavigator({
  Main: { screen: MainScreen },
  Login: { screen: LoginScreen },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
