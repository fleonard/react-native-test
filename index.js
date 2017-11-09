/**
 * App entry point
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import App from './src/components/App';

export default class ReactNativeTest extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
