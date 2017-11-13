// Google Location API
export function googleApis(latitude, longitude, authToken) {
  return 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=700&rankby=prominence&opennow=true&type=restaurant&key=AIzaSyAzs4PE09t8owoKD5ZewNXsts6NqTViy2c';
}

// Instagram Auth API
export function instagramAuth() {
  return 'https://www.instagram.com/oauth/authorize/?client_id=a1755791872a4c66bd5f9361871c809c&redirect_uri=https://github.com/fleonard&response_type=token&scope=public_content';
}
