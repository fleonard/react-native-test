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
import { Icon } from 'native-base';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';

import actions from '../actions';

import { googleApis } from '../config/feeds';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button (cmd + m) for dev menu',
});

class MainSreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapRegion: {
        latitude: 51.5217377,
        longitude: -0.0842008,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
      }
    };

    // Bind this function in order to have access to "this" inside the callback
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }

  /*
   * Channel One API Requests
   */

  onRegionChangeComplete(mapRegion) {
    this.setState({ mapRegion: mapRegion }, () => {
      this.props.getMarkers(googleApis(this.state.mapRegion.latitude, this.state.mapRegion.longitude, ''));
    });
  }


  static navigationOptions = ({navigation}) => ({
    title: `React Native Test`,
    headerRight: (
       <Icon style={styles.icon} name='person' onPress={() => navigation.navigate('Login')}/>
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}  
          initialRegion={this.state.mapRegion}
          onRegionChangeComplete={this.onRegionChangeComplete}
          moveOnMarkerPress={false}
          showsUserLocation={true}
          showsMyLocationButton={true}>
          {
            this.props.markers.length && this.props.markers.map((marker, i) => {
              return <MapView.Marker
                key={i}
                title={marker.name}
                coordinate={{latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng}}>
                <MapView.Callout>
                    <View>
                      <Text>{marker.name}</Text>
                    </View>
                </MapView.Callout>
              </MapView.Marker>
            })
          }
        </MapView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { markers } = state.map;
  
  return {
    markers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMarkers(url) {
      dispatch(actions.getMarkers(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  icon: {
    paddingRight: 10
  }
});