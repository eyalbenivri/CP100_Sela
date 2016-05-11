'use strict';

// Hierarchical node.js configuration with command-line arguments, environment variables, and files.
var nconf = module.exports = require('nconf');
var path = require('path');

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'TWITTER_CONSUMER_KEY',
    'TWITTER_CONSUMER_SECRET',
    'TWITTER_ACCESS_TOKEN_KEY',
    'TWITTER_ACCESS_TOKEN_SECRET',
    'TWITTER_HASHTAGS',
  ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({

  });

// Check for required settings
checkConfig('TWITTER_CONSUMER_KEY');
checkConfig('TWITTER_CONSUMER_SECRET');
checkConfig('TWITTER_ACCESS_TOKEN_KEY');
checkConfig('TWITTER_ACCESS_TOKEN_SECRET');
checkConfig('TWITTER_HASHTAGS');

function checkConfig (setting) {
  if (!nconf.get(setting)) {
    throw new Error('You must set the ' + setting + ' environment variable or' + ' add it to config.json!');
  }
}