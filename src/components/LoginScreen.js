/**
 * Login Screen
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import { connect } from 'react-redux';

import actions from '../actions';

class LoginSreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  getAccessToken(url) {
    return url.split("access_token=")[1];
  }
  
  onShouldStartLoadWithRequest = (event) => {
    let url = event['url'];
  
    if (url.indexOf("access_token=") > -1) {
      this.props.saveInstagramToken(this.getAccessToken(url));
  
      this.setState({
        isLoggedIn: true
      });
  
      return false;
    }
    return true;
  }
  
  //Android workaround -> onShouldStartLoadWithRequest is not supported.
  onNavigationStateChange = (navState) => {
    let url = navState.url;
  
    if (url.indexOf("access_token=") > -1) {
      this.props.setInstagramToken(this.getAccessToken(url));
  
      this.setState({
        isLoggedIn: true
      });
    }
  }

  static navigationOptions = {
    title: 'Instagram Login',
  };

  render() {

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        { this.state.isLoggedIn ?
          <View>
            <Text>You are logged in!</Text>
            <Text>This is yout token: {this.props.authToken}</Text>
          </View> :
          <WebView
            source={{uri: params.uri}}
            onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
            onNavigationStateChange={this.onNavigationStateChange}
            scalePagesToFit={true}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { authToken } = state.instagram;
  
  return {
    authToken
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInstagramToken(token) {
      dispatch(actions.setInstagramToken(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSreen);

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	}
});
