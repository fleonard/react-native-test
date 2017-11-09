/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class LoginSreen extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  render() {

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Login Screen!
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
	}
});
