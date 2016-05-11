var Twitter = require('twitter');
var config = require('./config');
var gcloud = require('gcloud');

var storage = gcloud.storage({
  projectId: config.get('GCLOUD_PROJECT')
});

var bucket = storage.bucket(CLOUD_BUCKET);

var CLOUD_BUCKET = config.get('CLOUD_BUCKET');

var client = new Twitter({
  consumer_key:         config.get("TWITTER_CONSUMER_KEY"),
  consumer_secret:      config.get("TWITTER_CONSUMER_SECRET"),
  access_token_key:     config.get("TWITTER_ACCESS_TOKEN_KEY"),
  access_token_secret:  config.get("TWITTER_ACCESS_TOKEN_SECRET")
});

var gcsname = Date.now() + "-tweets.txt";
var file = bucket.file(gcsname);
var writestream = file.createWriteStream();

client.stream('statuses/filter', {track: config.get("TWITTER_HASHTAGS")}, function(stream) {

  stream.pipe(writestream);

  stream.on('data', function(tweet) {
    console.log("--------- wrote tweet -------------");
  });

  stream.on('error', function(error) {
    console.error(error)
    throw error;
  });
});