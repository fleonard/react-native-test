/**
 * Map Screen
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

class MainSreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapRegion: null
    };

    // Bind this function in order to have access to "this" inside the callback
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        }
        this.setState({ mapRegion: region });
      },
      (error) => this.setState({ error: error.message })
      //,{ enableHighAccuracy: true, timeout: 20000, maximumAge: 0 } supposed to be used for andorid emulator but not really working
    );
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
            !!this.props.markers.length && this.props.markers.map((marker, i) => {
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
    paddingRight: 15
  }
});
