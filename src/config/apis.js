export function googleApis(latitude, longitude, authToken) {
  return 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=700&rankby=prominence&opennow=true&type=restaurant&key=AIzaSyAzs4PE09t8owoKD5ZewNXsts6NqTViy2c';
}
