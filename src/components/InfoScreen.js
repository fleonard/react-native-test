/**
 * Info Screen
 * @flow
 */

import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native';

import { googlePhotoApis } from '../config/apis';

const screen = Dimensions.get('window');

export default class InfoSreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      startValue: new Animated.Value(0),
      isExpanded: false
    };
  }

  animateView() {
    let toValue = (screen.height - 200) * -1;
    if (this.state.isExpanded) {
      toValue = 0;
    }

    Animated.spring(
      this.state.startValue,
      {
        toValue: toValue,
        velocity: 3,
        tension: 2,
        friction: 8
      }
    ).start();

    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    if (Platform.OS === 'android') {
      return <TouchableNativeFeedback onPress={() => {this.animateView()}}>
        <Animated.View style={[styles.container,
          {transform: [{translateY: this.state.startValue}]}]}>
          <Text style={styles.title}>{this.props.selectedMarker.name}</Text>
          <Image
            style={styles.image}
            source={{uri: googlePhotoApis(this.props.selectedMarker.photos[0].photo_reference)}}
          />
          { 
            this.props.selectedMarker.opening_hours.open_now ?
            <Text>Open Now</Text> :
            <Text>Now Closed</Text>
          }
        </Animated.View>
      </TouchableNativeFeedback>
    } else {
      return <TouchableHighlight onPress={() => {this.animateView()}}>
        <Animated.View style={[styles.container,
          {transform: [{translateY: this.state.startValue}]}]}>
          <Text style={styles.title}>{this.props.selectedMarker.name}</Text>
          <Image
            style={styles.image}
            source={googlePhotoApis(this.props.selectedMarker.photos.photo_reference)}
          />
        </Animated.View>
      </TouchableHighlight>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fafafa',
    left: 20,
    top: screen.height - 200,
    width: screen.width - 40,
    height: screen.height - 100,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: screen.width - 80,
    height: 200,
    marginVertical: 20
  },
});
