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
    let toValue = (screen.height - 180) * -1;
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
    console.log(this.props.placeDetails);
    if (Platform.OS === 'android' && !!this.props.placeDetails) {
      return <TouchableNativeFeedback onPress={() => {this.animateView()}}>
        <Animated.View style={[styles.container,
          {transform: [{translateY: this.state.startValue}]}]}>
          <Text style={[styles.title, styles.bold]}>{this.props.placeDetails.name}</Text>
          {
            !!this.props.placeDetails.photos &&
            <Image
              style={styles.image}
              source={{uri: googlePhotoApis(this.props.placeDetails.photos[Math.floor(Math.random() * this.props.placeDetails.photos.length)].photo_reference)}}
            />
          }
          { 
            !!this.props.placeDetails.opening_hours && this.props.placeDetails.opening_hours.open_now ?
              <Text style={[styles.paragraph, styles.bold]}>Open Now</Text> :
              <Text style={[styles.paragraph, styles.bold]}>Now Closed</Text>
          }
          { 
            !!this.props.placeDetails.opening_hours && this.props.placeDetails.opening_hours.weekday_text.map((time, i) => {
              return <Text key={i} style={styles.paragraph}>{time}</Text>
            })
          }
          <Text style={styles.paragraph}><Text style={styles.bold}>Address:</Text> {this.props.placeDetails.formatted_address}</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Phone Number:</Text> {this.props.placeDetails.international_phone_number}</Text>
          <Text style={styles.paragraph}><Text style={styles.bold}>Rating:</Text> {this.props.placeDetails.rating}</Text>
        </Animated.View>
      </TouchableNativeFeedback>
    } else {
      return <TouchableHighlight onPress={() => {this.animateView()}}>
        <Animated.View style={[styles.container,
          {transform: [{translateY: this.state.startValue}]}]}>
          <Text style={styles.title}>{this.props.placeDetails.name}</Text>
          {
            !!this.props.placeDetails.photos &&
            <Image
              style={styles.image}
              source={{uri: googlePhotoApis(this.props.placeDetails.photos[0].photo_reference)}}
            />
          }
          { 
            !!this.props.placeDetails.opening_hours && this.props.placeDetails.opening_hours.open_now ?
              <Text style={styles.paragraph}>Open Now</Text> :
              <Text style={styles.paragraph}>Now Closed</Text>
          }
          { 
            !!this.props.placeDetails.opening_hours && this.props.placeDetails.opening_hours.weekday_text.map((time, i) => {
              return <Text key={i} style={styles.paragraph}>{time}</Text>
            })
          }
          <Text style={styles.paragraph}>Address: {this.props.placeDetails.formatted_address}</Text>
          <Text style={styles.paragraph}>Phone Number: {this.props.placeDetails.international_phone_number}</Text>
          <Text style={styles.paragraph}>Rating: {this.props.placeDetails.rating}</Text>
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
    top: screen.height - 150,
    width: screen.width - 40,
    height: screen.height - 50,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    marginVertical: 5
  },
  image: {
    width: screen.width - 80,
    height: 220,
    marginVertical: 20
  },
});
