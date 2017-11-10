/**
 * App entry point
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, SafeAreaView, StyleSheet } from 'react-native';
import App from './src/components/App';

export default class ReactNativeTest extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <App />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
