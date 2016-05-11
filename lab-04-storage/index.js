var Twitter = require('twitter');
var config = require('./config');

var client = new Twitter({
  consumer_key:         config.get("TWITTER_CONSUMER_KEY"),
  consumer_secret:      config.get("TWITTER_CONSUMER_SECRET"),
  access_token_key:     config.get("TWITTER_ACCESS_TOKEN_KEY"),
  access_token_secret: 	config.get("TWITTER_ACCESS_TOKEN_SECRET")
});

client.stream('statuses/filter', {track: config.get("TWITTER_HASHTAGS")}, function(stream) {
  stream.on('data', function(tweet) {
  	console.log(tweet);
    console.log("----------------------");
  });

  stream.on('error', function(error) {
    console.error(error)
    throw error;
  });
});