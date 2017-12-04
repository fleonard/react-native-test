// Google Location API
export function googleApis(latitude, longitude) {
  return 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=700&rankby=prominence&opennow=true&type=restaurant&key=AIzaSyAzs4PE09t8owoKD5ZewNXsts6NqTViy2c';
}

// Google Places Photo API
export function googlePhotoApis(photoReference) {
  return 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + photoReference + '&key=AIzaSyAzs4PE09t8owoKD5ZewNXsts6NqTViy2c';
}

// Instagram Auth API
export function instagramAuth() {
  return 'https://www.instagram.com/oauth/authorize/?client_id=a1755791872a4c66bd5f9361871c809c&redirect_uri=https://github.com/fleonard&response_type=token&scope=public_content';
}

// Instagram Locations API
export function instagramLocations(latitude, longitude, authToken) {
  return 'https://api.instagram.com/v1/locations/search?lat=' + latitude + '&lng=' + longitude + '&distance=5&access_token=' + authToken;
}
// Instagram Media API
export function instagramMedias(locationId, authToken) {
  return 'https://api.instagram.com/v1/locations/' + locationId + '/media/recent?access_token=' + authToken;
}

