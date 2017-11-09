export function googleApis(latitude, longitude, authToken) {
  return 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=1400&type=restaurant&key=AIzaSyAzs4PE09t8owoKD5ZewNXsts6NqTViy2c';
}
